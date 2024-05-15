import Image from "next/image";
import Link from "next/link";

import DetailsHeader from "@/components/blog/blogDetailsPage/DetailsHeader";
import { recognitionsInfo } from "@/lib/constants";
import CardImage1 from "@/assets/berklee_post_img.webp";
import DetailsFooter from "@/components/blog/blogDetailsPage/DetailsFooter";
import Footer from "@/components/Footer";

const RecognitionsDetailsPage3 = () => {
  return (
    <div className="relative bg-[#fff] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-14">
      <DetailsHeader
        title={recognitionsInfo[2].title}
        date={recognitionsInfo[2].date}
        image={recognitionsInfo[2].image}
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
                <Link href="/blog/reconocimientos">Reconocimientos</Link>
              </p>
              <p className="w-auto h-full font-light oxygen px-2">/</p>
              <p className="w-auto h-full text-[#494949d2] font-light oxygen flex items-center">
                Nuestro Compositor Es Reconocido...
              </p>
            </nav>

            <div className="w-full h-auto pt-12 pb-6 bg-[#2e2414] mb-11">
              <div className="w-full h-full oxygen">
                <h2 className="w-full h-auto xl:text-[63px] lg:text-[58px] md:text-[55px] max-md:text-[37px] text-white flex justify-center items-center text-center leading-tight md:mb-2 max-md:mb-5">
                  Isaac Maldonado (Nuestro compositor) Reconocido en Berklee
                </h2>
                <p className="w-full h-auto md:text-[19px] max-md:text-[18px] leading-7 px-3 text-[#ddd] text-center oxygen mb-4">
                  El pasado 28 de Agosto de 2023, Isaac Maldonado apareció en un
                  artículo en la página oficial de Instagram de Berklee College
                  of Music en donde se le menciona como un estudiante honorífico
                  por sus habilidades y sus logros en el departamento de
                  composición para cine y televisión hasta la fecha.
                </p>
                <p className="w-full h-auto md:text-[19px] max-md:text-[18px] leading-7 px-3 text-[#ddd] text-center oxygen md:mb-[59px] max-md:mb-8">
                  ¡Muchas Felicidades! Es un Orgullo para IMC tanto como para
                  Berklee tenerte como uno de nuestros compositores
                </p>

                <div className="w-full h-auto flex justify-center items-center mb-3">
                  <div className="w-[590px] h-auto">
                    <Image
                      src={CardImage1}
                      alt="card_image"
                      className="w-full h-auto p-4 mb-2 object-contain"
                    />
                    <p className="w-full h-[56px] text-[#bbb] text-center text-lg flex justify-center items-center px-4 oxygen">
                      Publicación de Instagram de la página oficial de Berklee
                      College of Music
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h6 className="w-full h-auto text-[#494949d2] font-light oxygen">
              en{" "}
              <span className="font-bold text-[#765b30] ml-[2px]">
                <Link href="/blog/reconocimientos">Reconocimientos</Link>
              </span>
            </h6>
          </div>
        </div>
      </section>

      <DetailsFooter
        title={recognitionsInfo[3].title}
        date={recognitionsInfo[3].date}
        image={recognitionsInfo[3].image}
        url={recognitionsInfo[3].url}
      />

      <Footer />
    </div>
  );
};

export default RecognitionsDetailsPage3;
