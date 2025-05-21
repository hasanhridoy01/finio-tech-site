"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";

const Companies = () => {
  const com = [
    "/grameen.png",
    "/robi.png",
    "/transsion.png",
    "/bili.png",
    "/grameen.png",
    "/robi.png",
    "/transsion.png",
    "/bili.png",
  ];
  return (
    <section className="container mx-auto w-full  grid grid-cols-1 md:grid-cols-3 relative pt-12 pb-12">
      <div className=" prartners_left ">
        <div className="">
          <h2 className="text-[11px] font-[900] text-[#222222] mb-2 text-center md:text-start">
            Client’S
          </h2>
          <h1 className="section-title-two md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start">
            Trusted by Leading Companies.
          </h1>
          <h3 className="md:text-[18px] text-[14px] font-[500] text-[#555] text-center md:text-start">
            Partner Program for payments and beyond.
          </h3>

          <p className="my-2">
            Finiotech We work with industry leaders and forward-thinking
            innovators to deliver the best software & solutions. Trusted by
            forward-thinking businesses to power their financial transformation.
          </p>
          <h3 className="md:text-[18px] text-[14px] font-[500] text-[#555] text-center md:text-start">
            Want to see how we can help your business?
          </h3>

          <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button mt-6">
            Lets Tak
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
        </div>
      </div>
      <div className="md:col-span-2 prartners_right">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="">
            {com.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <span className="bg-white p-8 w-[100%] flex justify-center rounded-[12px]">
                      <img src={item} alt="" className="max-w-full " />
                    </span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Companies;
