import Image from "next/image";

import BgImage from "../../assets/achievements_img.svg";
import Link from "next/link";

const Achievements = () => {
  return (
    <section className="w-full h-[576px] pt-32 pb-8">
      <div className="container w-[1320px] h-full px-0">
        <div className="w-full h-full flex items-center">
          <div className="w-[50%] h-full flex justify-center items-center">
            <Image
              src={BgImage}
              alt="achievements"
              className="w-[395px] h-full"
            />
          </div>
          <div className="w-[550px] h-full p-4 ml-auto">
            <h2 className="w-full h-[53px] text-white text-5xl oxygen mb-2">
              Nuestros
            </h2>
            <h2 className="w-full h-[53px] text-white text-5xl oxygen mb-20">
              Logros
            </h2>
            <p className="w-full h-20 text-white text-lg oxygen mb-6">
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
