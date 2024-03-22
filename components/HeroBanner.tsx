"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Banner_1 from "../assets/banner_image_1.png";
import Banner_2 from "../assets/banner_image_2.webp";
import Banner_3 from "../assets/banner_image_3.jpg";

const HeroBanner = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
        setApi={setApi}
        className="bg-slate-600 h-[770px]"
      >
        <CarouselContent className="-ml-0">
          <CarouselItem className="pl-0">
            <Image
              src={Banner_1}
              alt="banner_image_1"
              className="w-full h-[770px] object-cover overflow-hidden"
            />
          </CarouselItem>
          <CarouselItem className="pl-0">
            <Image
              src={Banner_2}
              alt="banner_image_2"
              className="w-full h-[770px] object-cover overflow-hidden"
            />
          </CarouselItem>
          <CarouselItem className="pl-0">
            <Image
              src={Banner_3}
              alt="banner_image_3"
              className="w-full h-[770px] object-cover overflow-hidden"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-6 w-16 h-16" />
        <CarouselNext className="absolute top-1/2 right-6 w-16 h-16" />
      </Carousel>

      <ul className="w-full h-4 absolute top-[784px] z-2 flex mb-[1rem] list-none justify-center gap-[6px]">
        <li
          //   onClick={() => {
          //     api && api.scrollTo(0);
          //   }}
          className={`w-4 h-4 bg-[#fff] ${
            current !== 1 ? "opacity-[0.5]" : "opacity-[1]"
          } rounded-full border-[1px] border-transparent cursor-pointer`}
        />
        <li
          //   onClick={() => {
          //     api && api.scrollTo(1);
          //   }}
          className={`w-4 h-4 bg-[#fff] ${
            current !== 2 ? "opacity-[0.5]" : "opacity-[1]"
          } rounded-full border-[1px] border-transparent cursor-pointer`}
        />
        <li
          //   onClick={() => {
          //     api && api.scrollTo(2);
          //   }}
          className={`w-4 h-4 bg-[#fff] ${
            current !== 3 ? "opacity-[0.5]" : "opacity-[1]"
          } rounded-full border-[1px] border-transparent cursor-pointer`}
        />
      </ul>
    </>
  );
};

export default HeroBanner;
