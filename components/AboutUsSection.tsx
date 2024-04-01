import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../assets/iztac_logo_white.png";

const AboutUsSection = () => {
  return (
    <div className="w-full h-[727px] max-xl:h-[572px] pt-8 pb-32 about-us-sec-img no bg-no-repeat bg-bottom bg-cover flex justify-center items-center">
      <div className="container xl:w-[1320px] max-xl:w-[960px] xl:h-[567px] max-xl:h-[412px] p-0">
        <div className="flex w-full h-full items-center">
          {/* Info Section */}
          <div className="xl:w-[660px] max-xl:w-[480px] xl:h-[250px] max-xl:h-[271px] px-[15px] py-4">
            <h2 className="oxygen h-[53px] xl:mb-11 max-xl:mb-12 font-medium text-white text-[44px] pl-2 flex items-center">
              Sobre Nosotros
            </h2>
            <p className="text-white xl:text-lg max-xl:text-base xl:h-12 max-xl:h-[72px] mb-5 oxygen flex items-center">
              IMC es una compañía enfocada en la elaboración de música para
              cine, televisión y videojuegos. ¡Conoce más acerca de nosotros
              aquí!
            </p>
            <div className="w-full h-[38px] flex">
              <Link
                href="/about-us"
                className="w-[136px] h-full px-3 py-[6px] bg-[#f5f3f0] cursor-pointer border-[1px] border-transparent rounded-md text-center font-light text-lg oxygen flex items-center justify-center"
              >
                ¡Conoce más!
              </Link>
            </div>
          </div>

          {/* Logo */}
          <div className="xl:w-[550px] max-xl:w-[400px] h-full xl:ml-[110px] max-xl:ml-[80px] px-[15px] py-4">
            <Image src={Logo} alt="logo" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
