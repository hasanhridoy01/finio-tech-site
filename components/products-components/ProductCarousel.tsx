"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselProduct";

const resumes = [1, 2, 3]; 

export default function ProductCarousel() {
  return (
    <Carousel className="w-full max-w-[1340px] mx-auto md:mb-10 mb-0">
      <CarouselContent>
        {resumes.map((_, index) => (
          <CarouselItem key={index} className="p-4">
            <div className="relative flex items-center justify-center min-h-[500px] overflow-hidden">
              {/* Left shadow image */}
              <img
                src="/dark.png"
                alt=""
                className="absolute left-4 w-[420px] opacity-30 blur-sm scale-90 z-0"
              />

              {/* Center main image */}
              <img
                src="/dark.png"
                alt="Main"
                className="relative z-10 md:w-[450px] w-full"
              />

              {/* Right shadow image */}
              <img
                src="/dark.png"
                alt=""
                className="absolute right-4 w-[420px] opacity-30 blur-sm scale-90 z-0"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
