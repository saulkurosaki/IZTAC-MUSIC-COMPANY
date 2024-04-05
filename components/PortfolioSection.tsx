import Image from "next/image";

import Port_Top_Waves from "../assets/portfolio_top_waves.svg";
import Port_Bottom_Waves from "../assets/portfolio_bottom_waves.svg";
import Portfolio_Sec_Bg from "../assets/portfolio_sec_bg.jpg";
import Link from "next/link";
import PortfolioCard from "./PortfolioCard";
import { portfolioSongs } from "@/lib/constants";

const PortfolioSection = () => {
  return (
    <section className="relative w-full xl:h-[953px] lg:h-[825px] md:h-[2588px] max-md:[1834px]">
      {/* Fixed Background */}
      <span className="absolute inset-0 z-0">
        <Image
          src={Portfolio_Sec_Bg}
          alt="background"
          className="w-full h-full object-cover bg-cover bg-fixed bg-center"
        />
      </span>

      {/* Upper Section */}
      <div className="w-full xl:h-[411px] lg:h-[403px] md:h-[393px] absolute top-0 left-0 z-10 overflow-hidden">
        <Image
          src={Port_Top_Waves}
          alt="Top Waves"
          className="w-full h-auto object-contain"
        />
        <div className="absolute inset-0 w-full xl:h-[411px] lg:h-[403px] md:h-[393px] xl:pt-64 max-xl:pt-[260px] xl:pb-10 max-xl:pb-[50px]">
          <div className="flex flex-col container xl:w-full lg:w-[960px] md:w-[720px] h-full px-[15px] justify-around">
            <h2 className="w-full xl:h-[77px] max-xl:h-16 text-white text-center xl:text-7xl lg:text-6xl md:text-5xl oxygen">
              Con nosotros, todo es posible
            </h2>
            <h6 className="w-full h-[21px] text-white text-center xl:text-xl max-xl:text-lg oxygen">
              Escucha algunas de las entradas de nuestro portafolio.
            </h6>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="w-full xl:h-[542px] lg:h-[422px] md:h-[2195px] absolute bottom-0 right-0 z-10 flex items-end overflow-hidden">
        <Image
          src={Port_Bottom_Waves}
          alt="Bottom Waves"
          className="w-full h-auto object-contain"
        />
        <div className="absolute inset-0 w-full xl:h-[542px] lg:h-[422px] md:h-[2195px] py-6">
          <div className="xl:w-[1320px] lg:w-[960px] md:w-[720px] h-full container p-0">
            <div className="w-full h-full lg:grid lg:grid-cols-3 max-lg:flex max-lg:flex-col max-lg:justify-around">
              <PortfolioCard
                image={portfolioSongs[1].image}
                song={portfolioSongs[1].song}
              />

              <PortfolioCard
                image={portfolioSongs[2].image}
                song={portfolioSongs[2].song}
              />

              <PortfolioCard
                image={portfolioSongs[3].image}
                song={portfolioSongs[3].song}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
