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
import CarouselTracker from "./CarouselTracker";
import Link from "next/link";

const HeroBanner = () => {
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
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        // plugins={[
        //   Autoplay({
        //     delay: 10000,
        //   }),
        // ]}
        setApi={setApi}
        className="bg-slate-600 h-[770px]"
      >
        <CarouselContent className="-ml-0">
          <CarouselItem className="pl-0">
            <Image
              src={Banner_1}
              alt="banner_image_1"
              className="w-full h-[770px] object-cover z-10"
            />
            <div className="absolute inset-64 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center w-[720px] h-[241px] text-white z-20">
                <h2 className="text-[65px] font-oxygen">Bienvenido a IMC</h2>
                <p className="pb-4 text-3xl font-oxygen">Iztac Music Company</p>
                <p className="pb-4 text-xl font-oxygen">
                  Somos una productora musical especializada en cine, televisión
                  y videojuegos
                </p>
                <Link
                  href="/about-us"
                  className="text-[23px] font-normal mt-auto flex justify-center items-center w-44 h-12 bg-[#B99253] rounded-lg text-[#2b2f35ef] px-4 pya-2"
                >
                  Descubre más
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-0">
            <Image
              src={Banner_2}
              alt="banner_image_2"
              className="w-full h-[770px] object-cover z-10"
            />
            <div className="w-full absolute left-[100%] inset-64 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center w-[1000px] h-[198px] text-white z-20">
                <h2 className="text-[55px] font-oxygen">
                  Lleva tu proyecto al siguiente nivel
                </h2>
                <p className="pb-4 text-xl font-oxygen">
                  Contáctanos para saber acerca de nuestras asesorías artísticas
                </p>
                {/* <Link
                  href="/our-services"
                  className="text-[23px] font-normal mt-auto flex justify-center items-center w-40 h-12 bg-[#B99253] rounded-lg text-[#2b2f35ef] px-4 pya-2"
                >
                  Conoce más
                </Link> */}
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-0">
            <Image
              src={Banner_3}
              alt="banner_image_3"
              className="w-full h-[770px] object-cover z-10"
            />
            {/* <div className="w-full absolute left-[200%] inset-64 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center w-[1050px] h-[198px] text-white z-20">
                // <h2 className="text-[55px] font-oxygen">
                //   Composiciones mundialmente reconocidas
                // </h2>
                // <p className="pb-4 text-xl font-oxygen">
                //   Encuentra algunos de nuestros premios y nominaciones aquí
                // </p>
                // <Link
                //   href="/blog-2"
                //   className="text-[23px] font-normal mt-auto flex justify-center items-center w-52 h-12 bg-[#B99253] rounded-lg text-[#2b2f35ef] px-4 pya-2"
                // >
                //   Nuestros Logros
                // </Link>
              </div>
            </div> */}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-6 w-16 h-16" />
        <CarouselNext className="absolute top-1/2 right-6 w-16 h-16" />
      </Carousel>

      <CarouselTracker api={api} current={current} />
    </>
  );
};

export default HeroBanner;
