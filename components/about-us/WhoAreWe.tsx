import Image from "next/image";

import Banner_Img from "../../assets/who_are_we_banner_img.svg";

const WhoAreWe = () => {
  return (
    <section className="w-full xl:h-[712px] lg:h-[562px] md:h-[1142px] max-md:h-[911px] pt-8 pb-32 about-us-sec-img bg-no-repeat bg-bottom bg-cover bg-[#2e2414] relative z-10">
      <div className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] h-full px-0">
        <div className="w-full h-full flex max-lg:flex-col max-lg:justify-between items-center">
          <div className="lg:w-[50%] max-lg:w-full lg:h-[269px] md:h-[260px] max-md:h-[324px] p-4 flex flex-col md:justify-between">
            <h2 className="h-[53px] text-white md:text-5xl max-md:text-4xl oxygen flex items-center px-2 max-md:mb-10">
              Que es IMC
            </h2>
            <p className="h-[140px] text-white xl:text-lg lg:text-base md:text-lg max-md:text-base oxygen">
              Iztac Music Company es una productora musical especializada en la
              composición para media. En su equipo se encuentran compositores
              entrenados por los mejores profesores y en las mejores escuelas
              alrededor del mundo incluyendo instituciones como Berklee College
              of Music y países como Francia, La India, Estonia y Estados Unidos
            </p>
          </div>
          <div className="xl:w-[550px] lg:w-[400px] max-lg:w-full lg:h-full md:h-[722px] max-md:h-auto lg:ml-auto p-4">
            <Image src={Banner_Img} alt="image" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
