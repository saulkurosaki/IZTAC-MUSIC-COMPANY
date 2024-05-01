import Link from "next/link";
import Image from "next/image";

import { achievementsHeaders } from "@/lib/constants";
import DetailsHeader from "@/components/blog/blogDetailsPage/DetailsHeader";
import CardImage from "@/assets/business_references_img_6.svg";

const AchievementsDetailsPage1 = () => {
  return (
    <div className="relative bg-[#fff] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-14">
      <DetailsHeader
        title={achievementsHeaders[0].title}
        date={achievementsHeaders[0].date}
        image={achievementsHeaders[0].image}
      />

      <section className="container xl:w-[1320px] max-xl:w-[960px] h-auto px-[15px] pt-6 pb-12">
        <div className="container w-[720px] h-full px-0">
          <div className="w-full h-full">
            <nav className="w-full h-6 mb-4 flex">
              <p className="w-auto h-full text-[#a18049] text-lg font-light oxygen flex items-center">
                <Link href="/blog">Todos los blogs</Link>
              </p>
              <p className="w-auto h-full text-lg font-light oxygen px-2">/</p>
              <p className="w-auto h-full text-[#a18049] text-lg font-light oxygen flex items-center">
                <Link href="/blog/metas-cumplidas">Metas cumplidas</Link>
              </p>
              <p className="w-auto h-full text-lg font-light oxygen px-2">/</p>
              <p className="w-auto h-full text-[#494949d2] text-lg font-light oxygen flex items-center">
                IMC Manda a Sus Artistas a Nivel Internacional
              </p>
            </nav>

            <div className="w-full h-auto pt-12 pb-6 bg-[#2e2414] mb-11">
              <div className="w-full h-full oxygen">
                <h2 className="w-full h-auto xl:text-[63px] max-xl:text-[58px] text-white flex justify-center items-center text-center leading-tight mb-2">
                  ¡IMC se vuelve internacional!
                </h2>
                <p className="w-full h-auto text-[19px] leading-7 text-[#ddd] text-center oxygen mb-4">
                  IMC se alía con JMI para el programa Ethno, un taller en donde
                  artistas de 18 a 30 años de diversos países se juntan para
                  aprender de canciones folclóricas de alrededor del mundo,
                  aprendiendo acerca de la cultura de cada uno de ellos, así
                  como haciendo amistades internacionales.
                </p>
                <p className="w-full h-auto text-[19px] leading-7 text-[#ddd] text-center oxygen mb-[59px]">
                  En esta ocasión mandamos artistas a los países de La India,
                  Francia y Estonia. ¡Mucho éxito!
                </p>
                <div className="w-full h-[334px] flex justify-center items-center mb-3">
                  <div className="w-[379px] h-[294px]">
                    <Image
                      src={CardImage}
                      alt="card_image"
                      className="w-full h-[230px] p-4 mb-2 object-contain"
                    />
                    <p className="w-full h-[56px] text-[#bbb] text-lg flex justify-center items-center oxygen">
                      Logotipo oficial de Ethno
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

export default AchievementsDetailsPage1;
