import Image from "next/image";

import HeaderBg from "@/assets/business_references_img_6.svg";
import Link from "next/link";

const Header = () => {
  return (
    <section className="relative w-full xl:h-[251px] lg:h-[306px] md:h-[289px] max-md:h-[308px] bg-white z-10">
      <span className="relative block w-full h-full">
        <Image
          src={HeaderBg}
          alt="background"
          className="w-full h-full object-cover bg-cover bg-fixed bg-center z-0"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45))`,
          }}
        />
      </span>

      <div className="absolute inset-0 py-12 z-20">
        <div className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] max-md:w-full h-full px-[15px]">
          <div className="w-full h-full">
            <div className="md:w-[89px] md:h-[29px] max-md:w-[81px] max-md:h-[26px] rounded-md bg-[#f4f4f4] px-auto mb-2">
              <p className="md:text-2xl max-md:text-xl text-[#383838] text-center oxygen">
                Último
              </p>
            </div>
            <Link
              href="/blog/metas-cumplidas/imc-manda-a-sus-artistas-a-nivel-internacional"
              className="w-full text-[#eee] hover:opacity-70 oxygen"
            >
              <h1 className="lg:text-6xl md:text-5xl max-md:text-4xl font-light mb-2">
                IMC Manda a Sus Artistas a Nivel Internacional
              </h1>
              <h5 className="text-xl font-light">10 de Enero de 2019</h5>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
