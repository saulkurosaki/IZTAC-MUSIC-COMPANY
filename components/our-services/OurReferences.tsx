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
            <div className="w-full h-full py-20">
              <div className="container w-[1320px] h-full px-[15px]">
                <div className="w-[645px] h-full mx-auto flex">
                  <div className="w-12 h-12 bg-[#2e2414] rounded-tl-lg rounded-bl-lg p-3">
                    <Image src={QuoteSvg} alt="quote" />
                  </div>
                  <div className="w-[597px] h-full bg-white p-6 flex flex-col justify-between">
                    <p className="w-full h-[90px] oxygen text-black text-2xl italic font-light">
                      Gracias a las asesorías en IMC pude tener una audición
                      para una beca exitosa en la universidad que quería
                    </p>
                    <div className="w-full h-10 flex items-center">
                      <Image
                        src={Reference1}
                        alt="reference_img"
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                      <p className="w-auto h-auto text-xl text-[#959595] font-semibold italic oxygen">
                        María José - Alumna becada de UVM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Item 2 */}
          <CarouselItem className="pl-0">
            <div className="w-full h-full py-20">
              <div className="container w-[1320px] h-full px-[15px]">
                <div className="w-[645px] h-full mx-auto flex">
                  <div className="w-12 h-12 bg-[#2e2414] rounded-tl-lg rounded-bl-lg p-3">
                    <Image src={QuoteSvg} alt="quote" />
                  </div>
                  {/* <div className="w-[597px] h-full bg-white p-6 flex flex-col justify-between">
                    <p className="w-full h-[90px] oxygen text-black text-2xl italic font-light">
                      Con las asesorías en IMC logré expandir mi zona de confort
                      con seguridad y logré conseguir mi papel soñado en mi
                      musical favorito
                    </p>
                    <div className="w-full h-10 flex items-center">
                      <Image
                        src={Reference2}
                        alt="reference_img"
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                      <p className="w-auto h-auto text-xl text-[#959595] font-semibold italic oxygen">
                        Victoria - Estelar en Heathers
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Item 3 */}
          {/* <CarouselItem className="pl-0">
            <div className="w-full h-full py-20">
              <div className="container w-[1320px] h-full px-[15px]">
                <div className="w-[645px] h-full mx-auto flex">
                  <div className="w-12 h-12 bg-[#2e2414] rounded-tl-lg rounded-bl-lg p-3">
                    <Image src={QuoteSvg} alt="quote" />
                  </div>
                  <div className="w-[597px] h-full bg-white p-6 flex flex-col justify-between">
                    <p className="w-full h-[90px] oxygen text-black text-2xl italic font-light">
                      Estudiar en IMC me ayudo a mejorar mis técnicas y asi
                      lograr tener mi primer papel en un musical
                      semi-profesional
                    </p>
                    <div className="w-full h-10 flex items-center">
                      <Image
                        src={Reference3}
                        alt="reference_img"
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                      <p className="w-auto h-auto text-xl text-[#959595] font-semibold italic oxygen">
                        Victor Villas - Protagónico en The Heights
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem> */}
        </CarouselContent>
        {/* <CarouselPrevious className="absolute top-1/2 left-6 w-16 h-16 max-md:hidden" /> */}
        {/* <CarouselNext className="absolute top-1/2 right-6 w-16 h-16 max-md:hidden" /> */}
      </Carousel>

      {/* <CarouselTracker api={api} current={current} top="top-[1275px]" /> */}
    </section>
  );
};

export default OurReferences;
