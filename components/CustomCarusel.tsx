"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Button } from "./ui/button";

// Sample data for the carousels with images
const carouselItems = [
  { id: 1, img: "/one.jpg" },
  { id: 2, img: "/two.jpg" },
  { id: 3, img: "/one.jpg" },
  { id: 4, img: "/three.jpg" },
  { id: 5, img: "/one.jpg" },
  { id: 6, img: "/two.jpg" },
  { id: 7, img: "/three.jpg" },
  { id: 8, img: "/three.jpg" },
  { id: 9, img: "/one.jpg" },
  { id: 10, img: "/two.jpg" },
  { id: 11, img: "/three.jpg" },
];

const autoScrollOptions = {
  speed: 1, // Speed of auto scroll (1 = slow, 4 = fast)
  startDelay: 1000, // Delay before auto scroll starts (ms)
  direction: "forward", // "forward" or "backward"
  stopOnInteraction: false, // Continue scrolling after user interaction
  stopOnMouseEnter: true, // Pause on hover
  stopOnFocusIn: false, // Don't stop when focused
};

export default function CustomCarusel() {
  // Initialize embla carousel instances with the auto scroll plugin
  const [topEmblaRef, topEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      containScroll: "keepSnaps",
      align: "start",
      dragFree: true, // Enable drag free for smoother auto scroll
    },
    // @ts-ignore
    [AutoScroll(autoScrollOptions)]
  );

  const [bottomEmblaRef, bottomEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      align: "start",
      dragFree: true, // Enable drag free for smoother auto scroll
    },
    [
      AutoScroll({
        ...autoScrollOptions,
        direction: "backward", // Opposite direction for visual effect
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Initialize and link the carousels when APIs are available
  const syncCarousels = useCallback(() => {
    if (!topEmblaApi || !bottomEmblaApi) return;

    // Get the snap positions from the main carousel
    const onTopSelect = () => {
      if (!topEmblaApi || !bottomEmblaApi) return;
      const currentIndex = topEmblaApi.selectedScrollSnap();
      setSelectedIndex(currentIndex);
      // Note: For auto scroll, we might not want to sync positions
      // as it can interfere with the continuous scrolling
      // bottomEmblaApi.scrollTo(currentIndex);
    };

    // Get the snap positions from the secondary carousel
    const onBottomSelect = () => {
      if (!topEmblaApi || !bottomEmblaApi) return;
      const currentIndex = bottomEmblaApi.selectedScrollSnap();
      setSelectedIndex(currentIndex);
      // Note: For auto scroll, we might not want to sync positions
      // topEmblaApi.scrollTo(currentIndex);
    };

    // Extract scroll snap positions
    // @ts-ignore
    setScrollSnaps(topEmblaApi.scrollSnapList());

    // Bind the carousel select events
    topEmblaApi.on("select", onTopSelect);
    bottomEmblaApi.on("select", onBottomSelect);

    // Make sure carousels are synchronized on init
    onTopSelect();

    return () => {
      if (topEmblaApi) topEmblaApi.off("select", onTopSelect);
      if (bottomEmblaApi) bottomEmblaApi.off("select", onBottomSelect);
    };
  }, [topEmblaApi, bottomEmblaApi]);

  // Initialize synchronization when carousel APIs are available
  useEffect(() => {
    syncCarousels();
  }, [syncCarousels]);

  // Manual control functions (optional)
  const scrollPrev = useCallback(() => {
    if (topEmblaApi) topEmblaApi.scrollPrev();
    if (bottomEmblaApi) bottomEmblaApi.scrollPrev();
  }, [topEmblaApi, bottomEmblaApi]);

  const scrollNext = useCallback(() => {
    if (topEmblaApi) topEmblaApi.scrollNext();
    if (bottomEmblaApi) bottomEmblaApi.scrollNext();
  }, [topEmblaApi, bottomEmblaApi]);

  // Toggle auto scroll (pause/resume)
  const toggleAutoScroll = useCallback(() => {
    const topAutoScroll = topEmblaApi?.plugins()?.autoScroll;
    const bottomAutoScroll = bottomEmblaApi?.plugins()?.autoScroll;

    if (topAutoScroll && bottomAutoScroll) {
      if (topAutoScroll.isPlaying()) {
        topAutoScroll.stop();
        bottomAutoScroll.stop();
      } else {
        topAutoScroll.play();
        bottomAutoScroll.play();
      }
    }
  }, [topEmblaApi, bottomEmblaApi]);

  return (
    <div className="max-w-[1920px] mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Top Carousel - 3 items at a time */}
        <div className="carousel-wrapper md:col-span-3 hidden md:block">
          <div
            className="w-full overflow-hidden carousel-box"
            ref={topEmblaRef}
          >
            <div className="flex h-full">
              {carouselItems.map((item) => (
                <div className="flex-[0_0_33.333%] relative" key={item.id}>
                  <div className="mx-1 rounded-lg overflow-hidden">
                    <img
                      src={item.img}
                      alt={`Slide ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Text Section */}
        <div className="flex flex-col justify-top md:col-span-2">
          <div className="p-12">
            <h2 className="text-[11px] font-[900] text-[#222222] mb-2 text-center md:text-start">
              Features
            </h2>
            <h1 className="section-title-two md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-6 text-center md:text-start">
              Mobile Financial Services Platform
            </h1>
            <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222] text-center md:text-start">
              Deliver seamless digital payment experiences with our robust,
              secure, and scalable eWallet solutions
            </h3>

            {/* Features List */}
            <ul className="list-disc pl-5 mt-6 ml-3 text-[#222222] text-[12px] md:text-[18px] font-[500] flex flex-col gap-3 ">
              <li className="">Single or Multi-currency options</li>
              <li className="">Cross-border payments</li>
              <li className="">QR code and NFC-enabled contactless payments</li>
              <li className="">Peer-to-peer (P2P) transfers</li>
              <li className="">
                Loyalty rewards, cashback, and coupon integration
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-8">
              <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button">
                Find More Details
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7359 6.43018L20.8059 12.5002L14.7359 18.5702"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.3159 12.5H20.6359"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.80591 12.5H7.27591"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>

              {/* Optional: Toggle Auto Scroll Button */}
              <Button
                onClick={toggleAutoScroll}
                className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button"
              >
                Toggle Scroll
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Carousel - 1 item + half of the next item */}
        <div className="carousel-wrapper-right hidden md:block">
          <div
            className="w-full overflow-hidden carousel-box-right"
            ref={bottomEmblaRef}
          >
            <div className="flex h-full">
              {carouselItems.map((item) => (
                <div
                  className="md:flex-[0_0_340%] lg:flex-[0_0_240%] xl:flex-[0_0_180%] 2xl:flex-[0_0_140%] relative"
                  key={item.id}
                >
                  <div className="mx-1 rounded-lg overflow-hidden">
                    <img
                      src={item.img}
                      alt={`Slide ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
