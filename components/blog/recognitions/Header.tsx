import Image from "next/image";

import HeaderBg from "@/assets/recognitions_bg_img.png";

const Header = () => {
  return (
    <section className="relative w-full xl:h-[215px] lg:h-[208px] max-lg:h-[200px]">
      <span className="relative block w-full h-full">
        <Image
          src={HeaderBg}
          alt="background"
          className="w-full h-full object-cover bg-cover bg-fixed bg-center z-0"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))`,
          }}
        />
      </span>

      <div className="absolute inset-0 py-12 z-20">
        <div className="container xl:w-[1320px] lg:w-[960px] max-lg:w-[720px] h-full px-[15px]">
          <div className="w-full text-[#eee] hover:opacity-70 font-light oxygen mt-2">
            <h1 className="lg:text-6xl md:text-5xl max-md:text-4xl">
              Reconocimientos
            </h1>
            <h5 className="text-xl">
              Las menciones que le dan prestigio a la compañía
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
