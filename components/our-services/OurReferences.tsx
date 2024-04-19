"use client";

import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import { useEffect, useState } from "react";
import CarouselTracker from "../CarouselTracker";

import Reference1 from "../../assets/reference_img_1.jpg";
import Reference2 from "../../assets/reference_img_2.jpg";
import Reference3 from "../../assets/reference_img_3.jpg";
import QuoteSvg from "../../assets/quote_svg.png";
import ReferenceCard from "./ReferenceCard";
import { referencesInfo } from "@/lib/constants";

const OurReferences = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="w-full h-[354px] bg-[#B99253]">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={
          [
            //   Autoplay({
            //     delay: 10000,
            //   }),
          ]
        }
        setApi={setApi}
        className="bg-[#B99253] h-[354px]"
      >
        <CarouselContent className="-ml-0 h-[354px]">
          {/* Item 1 */}
          <CarouselItem className="pl-0">
            <ReferenceCard
              quote={referencesInfo.Majo.quote}
              author={referencesInfo.Majo.author}
              avatar={referencesInfo.Majo.avatar}
            />
          </CarouselItem>
          {/* Item 2 */}
          <CarouselItem className="pl-0">
            {/* <ReferenceCard
              quote={referencesInfo.Victoria.quote}
              author={referencesInfo.Victoria.author}
              avatar={referencesInfo.Victoria.avatar}
            /> */}
          </CarouselItem>
          {/* Item 3 */}
          <CarouselItem className="pl-0">
            {/* <ReferenceCard
              quote={referencesInfo.Victor.quote}
              author={referencesInfo.Victor.author}
              avatar={referencesInfo.Victor.avatar}
            /> */}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-6 w-16 h-16 max-md:hidden" />
        <CarouselNext className="absolute top-1/2 right-6 w-16 h-16 max-md:hidden" />
      </Carousel>

      <CarouselTracker api={api} current={current} top="top-[1275px]" />
    </section>
  );
};

export default OurReferences;
