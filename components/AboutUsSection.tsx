import Link from "next/link";
import React from "react";

const AboutUsSection = () => {
  return (
    <div className="w-full h-[727px] pt-8 pb-32 about-us-sec-img no bg-no-repeat bg-bottom bg-cover flex justify-center items-center">
      <div className="container w-[1320px] h-[567px] p-0">
        <div className="flex w-full h-full items-center">
          <div className="w-[660px] h-[250px] px-[15px] py-4">
            <h2 className="oxygen h-[53px] mb-11 font-medium text-white text-[44px] pl-2 flex items-center">
              Sobre Nosotros
            </h2>
            {/* <p className="text-white text-lg h-12 mb-5 oxygen flex items-center">
              IMC es una compañía enfocada en la elaboración de música para
              cine, televisión y videojuegos. ¡Conoce más acerca de nosotros
              aquí!
            </p> */}
            {/* <div className="w-full h-[38px] flex">
              <Link
                href="/about-us"
                className="w-[136px] h-full px-3 py-[6px] bg-[#f5f3f0] cursor-pointer border-[1px] border-transparent rounded-md text-center font-light text-lg oxygen flex items-center justify-center"
              >
                ¡Conoce más!
              </Link>
            </div> */}
          </div>
          {/* <div className="w-[550px] h-full ml-[110px] px-[15px] py-4"></div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
