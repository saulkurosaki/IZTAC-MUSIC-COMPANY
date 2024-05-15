import Image from "next/image";
import Link from "next/link";

import DetailsHeader from "@/components/blog/blogDetailsPage/DetailsHeader";
import { achievementsInfo } from "@/lib/constants";
import CardImage from "@/assets/maria_jose_congratulations.jpg";
import DetailsFooter from "@/components/blog/blogDetailsPage/DetailsFooter";
import Footer from "@/components/Footer";

const AchievementsDetailsPage2 = () => {
  return (
    <div className="relative bg-[#fff] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-14">
      <DetailsHeader
        title={achievementsInfo[1].title}
        date={achievementsInfo[1].date}
        image={achievementsInfo[1].image}
      />

      <section className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] max-md:w-full h-auto px-[15px] pt-6 pb-12">
        <div className="container lg:w-[720px] max-lg:w-full h-full px-0">
          <div className="w-full h-full">
            <nav className="w-full h-6 md:text-lg max-md:text-sm mb-6 flex">
              <p className="w-auto h-full text-[#a18049] font-light oxygen flex items-center">
                <Link href="/blog">Todos los blogs</Link>
              </p>
              <p className="w-auto h-full font-light oxygen px-2">/</p>
              <p className="w-auto h-full text-[#a18049] font-light oxygen flex items-center">
                <Link href="/blog/metas-cumplidas">Metas cumplidas</Link>
              </p>
              <p className="w-auto h-full font-light oxygen px-2">/</p>
              <p className="w-auto h-full text-[#494949d2] font-light oxygen flex items-center">
                María José Obtiene Beca Al Quedar En El Ensamble...
              </p>
            </nav>

            <div className="w-full h-auto pt-12 pb-6 bg-[#2e2414] mb-11">
              <div className="w-full h-full oxygen">
                <h2 className="w-full h-auto xl:text-[63px] lg:text-[58px] md:text-[55px] max-md:text-[37px] text-white flex justify-center items-center text-center leading-tight md:mb-2 max-md:mb-5">
                  ¡Felicidades!
                </h2>
                <p className="w-full h-auto md:text-[19px] max-md:text-[18px] leading-7 px-3 text-[#ddd] text-center oxygen mb-4">
                  María José pudo obtener una beca para entrar a la preparatoria
                  de su preferencia después de tomar asesorías en IMC.
                </p>
                <p className="w-full h-auto md:text-[19px] max-md:text-[18px] leading-7 px-3 text-[#ddd] text-center oxygen md:mb-[59px] max-md:mb-8">
                  Sus habilidades vocales le dieron acceso a una beca artística
                  como vocalista en el ensamble oficial de la preparatoria
                  ¡Muchas Felicidades!
                </p>
                <div className="w-full h-auto flex justify-center items-center mb-3">
                  <div className="w-[590px] h-auto">
                    <Image
                      src={CardImage}
                      alt="card_image"
                      className="w-full h-auto p-4 mb-2 object-contain"
                    />
                    <p className="w-full h-[56px] text-[#bbb] text-lg flex justify-center items-center oxygen">
                      Foto conmemorativa de la artista
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h6 className="w-full h-auto text-[#494949d2] font-light oxygen">
              en{" "}
              <span className="font-bold text-[#765b30] ml-[2px]">
                <Link href="/blog/metas-cumplidas">Metas cumplidas</Link>
              </span>
            </h6>
          </div>
        </div>
      </section>

      <DetailsFooter
        title={achievementsInfo[2].title}
        date={achievementsInfo[2].date}
        image={achievementsInfo[2].image}
        url={achievementsInfo[2].url}
      />

      <Footer />
    </div>
  );
};

export default AchievementsDetailsPage2;
