"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { imgBig1, imgBig2, imgBig3 } from "@/assets/image";

export function Hero() {
  const images = [imgBig1, imgBig2, imgBig3];
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
    const timer = setInterval(() => {
          api.scrollNext()
      }, 2000)
    return () => clearInterval(timer);
  }, [api]);

  return (
    <Carousel className="relative" setApi={setApi} opts={{ loop: true }}>
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="w-full aspect-[128/45] relative">
              <Image
                fill
                src={img}
                alt={`fashion ${index + 1}`}
                className="object-cover"
                priority={index === 0 ? true : false}
                sizes="100vw"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 w-8 h-8 bg-primary" />
      <CarouselNext className="right-2 w-8 h-8 bg-primary" />
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`
                h-2 w-2 rounded-full transition-all
                ${current === index ? "bg-primary w-4" : "bg-primary/50"}
              `}
            />
          ))}
        </div>
      </div>
    </Carousel>
  );
}
