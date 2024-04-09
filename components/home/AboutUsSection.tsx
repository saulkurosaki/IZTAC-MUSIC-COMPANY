import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../../assets/iztac_logo_white.png";

const AboutUsSection = () => {
  return (
    <section className="w-full xl:h-[727px] lg:h-[572px] md:h-[1143px] max-md:h-[800px] pt-8 pb-32 max-md:pb-20 about-us-sec-img no bg-no-repeat bg-bottom bg-cover max-lg:bg-contain max-md:bg-contain flex justify-center items-center">
      <div className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] xl:h-[567px] lg:h-[412px] md:h-[983px] max-md:h-[696px] p-0">
        <div className="flex w-full h-full items-center max-lg:flex-col">
          {/* Info Section */}
          <div className="xl:w-[660px] lg:w-[480px] md:w-[720px] xl:h-[250px] lg:h-[271px] md:h-[242px] max-md:h-[258px] px-[15px] py-4 max-md:flex max-md:flex-col max-md:justify-between">
            <h2 className="oxygen lg:h-[53px] md:h-11 xl:mb-11 lg:mb-12 max-lg:mb-10 font-medium text-white lg:text-[44px] max-lg:text-4xl pl-2 flex items-center">
              Sobre Nosotros
            </h2>
            <p className="text-white xl:text-lg max-xl:text-base xl:h-12 max-xl:h-[72px] lg:mb-5 md:mb-2 max-md:mb-5 oxygen flex items-center">
              IMC es una compañía enfocada en la elaboración de música para
              cine, televisión y videojuegos. ¡Conoce más acerca de nosotros
              aquí!
            </p>
            <div className="w-full h-[38px] flex relative z-10">
              <Link
                href="/about-us"
                className="w-[136px] h-full px-3 py-[6px] bg-[#f5f3f0] cursor-pointer border-[1px] border-transparent rounded-md text-center font-light text-lg text-[#2e2414] oxygen flex items-center justify-center"
              >
                ¡Conoce más!
              </Link>
            </div>
          </div>

          {/* Logo */}
          <div className="xl:w-[550px] lg:w-[400px] md:w-[720px] h-full max-md:h-[438px] xl:ml-[110px] lg:ml-[80px] px-[15px] py-4">
            <Image src={Logo} alt="logo" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
