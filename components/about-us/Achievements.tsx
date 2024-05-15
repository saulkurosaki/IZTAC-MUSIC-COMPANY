import Image from "next/image";

import BgImage from "../../assets/achievements_img.svg";
import Link from "next/link";

const Achievements = () => {
  return (
    <section className="w-full xl:h-[576px] lg:h-[616px] md:h-[771px] lg:pt-32 max-lg:pt-8 pb-8 bg-[#2e2414] relative z-10">
      <div className="container xl:w-[1320px] lg:w-[960px] h-full px-0">
        <div className="w-full h-full flex max-lg:flex-col items-center">
          <div className="w-[50%] h-full flex justify-center items-center">
            <Image
              src={BgImage}
              alt="achievements"
              className="w-[395px] h-full"
            />
          </div>
          <div className="xl:w-[550px] lg:w-[400px] max-lg:w-full h-full p-4 ml-auto">
            <h2 className="w-full lg:h-[53px] max-lg:h-10 text-white md:text-5xl max-md:text-4xl oxygen lg:mb-2 max-lg:mb-1">
              Nuestros
            </h2>
            <h2 className="w-full lg:h-[53px] max-lg:h-10 text-white md:text-5xl max-md:text-4xl oxygen lg:mb-20 max-lg:mb-14">
              Logros
            </h2>
            <p className="w-full xl:h-[86px] lg:h-36 text-white md:text-lg max-md:text-base oxygen mb-4">
              Parte de nuestros reconocimientos son premios internacionales por
              mejores composiciones para cine y televisión, celebración de
              festivales y artistas cumpliendo sus metas
            </p>
            <div className="w-full h-10">
              <Link
                href="/blog"
                className="w-[168px] h-full bg-[#B99253] rounded-lg flex justify-center items-center text-[#3f3f3f] text-lg oxygen"
              >
                Historias de Éxito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
