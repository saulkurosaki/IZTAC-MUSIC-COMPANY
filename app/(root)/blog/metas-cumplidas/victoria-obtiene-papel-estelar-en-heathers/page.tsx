import Image from "next/image";
import Link from "next/link";

import DetailsHeader from "@/components/blog/blogDetailsPage/DetailsHeader";
import { achievementsInfo } from "@/lib/constants";
import CardImage from "@/assets/victoria_congratulations.jpg";

const AchievementsDetailsPage3 = () => {
  return (
    <div className="relative bg-[#fff] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-14">
      <DetailsHeader
        title={achievementsInfo[2].title}
        date={achievementsInfo[2].date}
        image={achievementsInfo[2].image}
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
                Victoria Obtiene Papel Estelar En Heathers
              </p>
            </nav>

            <div className="w-full h-auto pt-12 pb-6 bg-[#2e2414] mb-11">
              <div className="w-full h-full oxygen">
                <h2 className="w-full h-auto xl:text-[63px] lg:text-[58px] md:text-[55px] max-md:text-[37px] text-white flex justify-center items-center text-center leading-tight md:mb-2 max-md:mb-5">
                  ¡Que Bello!
                </h2>
                <p className="w-full h-auto md:text-[19px] max-md:text-[18px] leading-7 px-3 text-[#ddd] text-center oxygen mb-4">
                  Victoria, una de nuestras artistas tomando asesorías en IMC
                  logro obtener lo que ella describe como su "Papel Soñado" una
                  vez que se abrieron las audiciones para la adaptación al
                  español del musical de Heathers como Verónica (el papel
                  estelar en este musical) en Querétaro por parte de la compañía
                  productora Possum.
                </p>
                <p className="w-full h-auto md:text-[19px] max-md:text-[18px] leading-7 px-3 text-[#ddd] text-center oxygen md:mb-[59px] max-md:mb-8">
                  Las funciones empezarán a partir de junio y estarán en
                  diferentes teatros alrededor de la ciudad ¡Muchas felicidades
                  Victoria! Te deseamos mucha suerte en tus presentaciones y
                  gracias por confiar en nosotros.
                </p>
                <div className="w-full h-auto flex justify-center items-center mb-3">
                  <div className="w-[590px] h-auto">
                    <Image
                      src={CardImage}
                      alt="card_image"
                      className="w-full h-auto p-4 mb-2 object-contain"
                    />
                    <p className="w-full h-[56px] text-[#bbb] text-lg flex justify-center items-center oxygen">
                      Foto conmemorativa con Victoria
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
    </div>
  );
};

export default AchievementsDetailsPage3;
