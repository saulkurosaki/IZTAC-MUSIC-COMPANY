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
import Banner_2_lines from "../assets/banner_2_lines.svg";
import Banner_3_waves from "../assets/banner_3_waves.svg";
import CarouselTracker from "./CarouselTracker";
import Link from "next/link";
import {
  generateClipPathBottomStyle,
  generateClipPathTopStyle,
  useWindowSize,
} from "@/lib/utils";

const HeroBanner = () => {
  const size = useWindowSize();
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
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
        setApi={setApi}
        className="bg-[#2e2414] h-[770px]"
      >
        <CarouselContent className="-ml-0">
          <CarouselItem className="pl-0">
            <Image
              src={Banner_1}
              alt="banner_image_1"
              className="w-full h-[770px] object-cover z-10"
            />

            <div className="absolute inset-0 flex items-start max-md:hidden">
              <div
                className="w-screen h-[172px] bg-[#2e2414] z-20"
                style={{ clipPath: generateClipPathTopStyle(size.width) }}
              ></div>
            </div>

            <div className="absolute inset-0 max-lg:inset-32 max-md:inset-3 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center w-[720px] h-[241px] max-md:w-[351px] max-md:h-[300px] text-white z-20">
                <h2 className="text-[65px] text-center max-lg:text-[52px] max-md:text-5xl max-md:pb-4 oxygen">
                  Bienvenido a IMC
                </h2>
                <p className="pb-4 text-3xl max-lg:text-2xl oxygen">
                  Iztac Music Company
                </p>
                <p className="pb-4 text-xl max-md:text-base text-center oxygen">
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

            <div className="absolute inset-0 flex items-end max-md:hidden">
              <div
                className="w-screen h-[78px] bg-[#2e2414] z-20"
                style={{
                  clipPath: generateClipPathBottomStyle(size.width),
                }}
              ></div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-0">
            <Image
              src={Banner_2_lines}
              alt="banner_2_lines"
              className="absolute w-full z-20 max-md:hidden"
            />
            <Image
              src={Banner_2}
              alt="banner_image_2"
              className="w-full h-[770px] object-cover z-10"
            />
            <div className="w-full absolute left-[100%] inset-0 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center w-[1000px] max-xl:w-[570px] max-md:w-[340px] h-52 lg:h-56 xl:h-48 text-white z-20">
                <h2 className="text-[55px] text-center max-xl:text-6xl max-lg:text-5xl max-md:text-[34px] max-xl:pb-4 oxygen">
                  Lleva tu proyecto al siguiente nivel
                </h2>
                <p className="pb-4 text-center text-xl max-md:text-base max-md:px-4 oxygen">
                  Contáctanos para saber acerca de nuestras asesorías artísticas
                </p>
                <Link
                  href="/our-services"
                  className="text-[23px] font-normal mt-auto flex justify-center items-center w-40 h-12 bg-[#B99253] rounded-lg text-[#2b2f35ef] px-4 pya-2"
                >
                  Conoce más
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-0">
            <Image
              src={Banner_3_waves}
              alt="banner_3_waves"
              className="absolute w-full h-full z-20 max-md:hidden"
            />
            <Image
              src={Banner_3}
              alt="banner_image_3"
              className="w-full h-[770px] object-cover z-10"
            />
            <div className="w-full absolute left-[200%] inset-0 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center w-[1050px] max-xl:w-[900px] max-lg:w-[670px] max-md:w-[340px] h-[198px] max-xl:h-52 max-lg:h-48 max-md:h-64 xl:h-44 text-white z-20">
                <h2 className="text-[50px] max-xl:text-5xl max-lg:text-[42px] max-md:text-4xl max-xl:pb-3 max-md:pb-5 text-center oxygen">
                  Composiciones mundialmente reconocidas
                </h2>
                <p className="pb-4 text-center text-xl max-md:text-base max-md:px-4 oxygen">
                  Encuentra algunos de nuestros premios y nominaciones aquí
                </p>
                <Link
                  href="/blog-2"
                  className="text-[23px] font-normal mt-auto flex justify-center items-center w-[199px] h-12 bg-[#B99253] rounded-lg text-[#2b2f35ef] px-4 pya-2"
                >
                  Nuestros Logros
                </Link>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-6 w-16 h-16 max-md:hidden" />
        <CarouselNext className="absolute top-1/2 right-6 w-16 h-16 max-md:hidden" />
      </Carousel>

      <CarouselTracker api={api} current={current} />
    </>
  );
};

export default HeroBanner;
