import Image from "next/image";

import Port_Top_Waves from "../assets/portfolio_top_waves.svg";
import Port_Bottom_Waves from "../assets/portfolio_bottom_waves.svg";
import Portfolio_Sec_Bg from "../assets/portfolio_sec_bg.jpg";
import Portfolio_Image_1 from "../assets/portfolio_image_1.webp";
import Portfolio_Image_2 from "../assets/portfolio_image_2.webp";
import Portfolio_Image_3 from "../assets/portfolio_image_3.webp";
import Link from "next/link";

const PortfolioSection = () => {
  return (
    <section className="relative w-full h-[953px]">
      <span className="absolute inset-0 z-0">
        <Image
          src={Portfolio_Sec_Bg}
          alt="background"
          className="w-full h-full object-cover bg-cover bg-fixed bg-center"
        />
      </span>

      <div className="w-full h-[411px] absolute top-0 left-0 z-10 overflow-hidden">
        <Image
          src={Port_Top_Waves}
          alt="Top Waves"
          className="w-full h-auto object-contain"
        />
        <div className="absolute inset-0 w-full h-[411px] pt-64 pb-10">
          <div className="flex flex-col container w-full h-full px-[15px] justify-around">
            <h2 className="w-full h-[77px] text-white text-center text-7xl oxygen">
              Con nosotros, todo es posible
            </h2>
            <h6 className="w-full h-[21px] text-white text-center text-xl oxygen">
              Escucha algunas de las entradas de nuestro portafolio.
            </h6>
          </div>
        </div>
      </div>

      <div className="w-full h-[542px] absolute bottom-0 right-0 z-10 flex items-end overflow-hidden">
        <Image
          src={Port_Bottom_Waves}
          alt="Bottom Waves"
          className="w-full h-auto object-contain"
        />
        <div className="absolute inset-0 w-full h-[542px] py-6">
          <div className="w-[1320px] h-full container p-0">
            <div className="w-full h-full grid grid-cols-3">
              <div className="flex flex-col w-auto h-auto px-2">
                <Image
                  src={Portfolio_Image_1}
                  alt="portfolio_image_1"
                  className="w-full h-auto object-cover pb-3 rounded-lg"
                />
                <div className="w-full h-[38px]">
                  <Link
                    href="https://soundcloud.com/zackarymc101/infierno-credit-sequence?si=bc5ce5534680455eb8140f74ed6ab6f7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    className="w-24 h-full flex justify-center items-center rounded-lg text-[#2e2414] text-lg bg-[#B99253] oxygen"
                  >
                    Escucha
                  </Link>
                </div>
              </div>

              <div className="flex flex-col w-auto h-auto px-2">
                <Image
                  src={Portfolio_Image_2}
                  alt="portfolio_image_1"
                  className="w-full h-auto object-cover pb-3 rounded-lg"
                />
                <div className="w-full h-[38px]">
                  <Link
                    href="https://soundcloud.com/zackarymc101/forseer?si=b97584bca96c42218d01529db20aff77&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    className="w-24 h-full flex justify-center items-center rounded-lg text-[#2e2414] text-lg bg-[#B99253] oxygen"
                  >
                    Escucha
                  </Link>
                </div>
              </div>

              <div className="flex flex-col w-auto h-auto px-2">
                <Image
                  src={Portfolio_Image_3}
                  alt="portfolio_image_1"
                  className="w-full h-auto object-cover pb-3 rounded-lg"
                />
                <div className="w-full h-[38px]">
                  <Link
                    href="https://soundcloud.com/zackarymc101/frustration?si=b4fa00fffa494e2db8b0d6eff2440bcd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    className="w-24 h-full flex justify-center items-center rounded-lg text-[#2e2414] text-lg bg-[#B99253] oxygen"
                  >
                    Escucha
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
