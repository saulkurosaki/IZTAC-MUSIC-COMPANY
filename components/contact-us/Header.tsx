import Image from "next/image";

import HeaderBg from "../../assets/banner_image_2.webp";

const Header = () => {
  return (
    <section className="relative w-full lg:h-[131px] md:h-[114px] max-md:h-[101px] z-10">
      <span className="absolute inset-0 z-0">
        <Image
          src={HeaderBg}
          alt="background"
          className="w-full h-full object-cover bg-cover bg-fixed bg-center"
        />
      </span>

      <div className="w-full h-full py-6">
        <div className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] h-full px-[15px]">
          <h1 className="w-full h-full mb-2 text-white lg:text-6xl md:text-5xl max-md:text-4xl oxygen z-0 relative flex items-center">
            Contáctanos
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
