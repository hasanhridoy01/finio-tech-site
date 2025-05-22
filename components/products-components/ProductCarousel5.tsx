"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
export default function ProductCarousel5() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  console.log("current :", current);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="mx-auto max-w-5xl">
      <Carousel setApi={setApi} className="w-full " opts={{ loop: true }}>
        <CarouselContent className="py-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[33%]">
              <Card
                className={cn("transition-transform duration-500", {
                  "scale-[0.8] blur-xs": index !== current - 1,
                })}
              >
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img src="/dark5.png" alt="" className="" />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="bg-red-300 absolute bottom-0 flex justify-between w-full">
          <CarouselPrevious className="bg-transparent text-primary" />
          <CarouselNext className="bg-transparent text-primary" />
        </div>
      </Carousel>
    </div>
  );
}
