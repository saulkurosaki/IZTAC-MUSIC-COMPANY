"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import CarouselTracker from "../CarouselTracker";

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
    <section className="w-full xl:h-[354px] lg:h-[384px] bg-[#B99253]">
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
        className="bg-[#B99253] xl:h-[354px] lg:h-[384px]"
      >
        <CarouselContent className="-ml-0 xl:h-[354px] lg:h-[384px]">
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
            <ReferenceCard
              quote={referencesInfo.Victoria.quote}
              author={referencesInfo.Victoria.author}
              avatar={referencesInfo.Victoria.avatar}
            />
          </CarouselItem>
          {/* Item 3 */}
          <CarouselItem className="pl-0">
            <ReferenceCard
              quote={referencesInfo.Victor.quote}
              author={referencesInfo.Victor.author}
              avatar={referencesInfo.Victor.avatar}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-6 w-16 h-16 max-md:hidden" />
        <CarouselNext className="absolute top-1/2 right-6 w-16 h-16 max-md:hidden" />
      </Carousel>

      <CarouselTracker api={api} current={current} isReferenceCard />
    </section>
  );
};

export default OurReferences;
