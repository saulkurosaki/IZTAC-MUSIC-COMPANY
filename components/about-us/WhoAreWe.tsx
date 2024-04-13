import Image from "next/image";

import Banner_Img from "../../assets/who_are_we_banner_img.svg";

const WhoAreWe = () => {
  return (
    <section className="w-full xl:h-[712px] lg:h-[562px] pt-8 pb-32 about-us-sec-img bg-no-repeat bg-bottom bg-cover">
      <div className="container xl:w-[1320px] lg:w-[960px] h-full px-0">
        <div className="w-full h-full flex items-center">
          <div className="w-[50%] h-[269px] p-4 flex flex-col justify-between">
            <h2 className="h-[53px] text-white text-5xl oxygen flex items-center px-2">
              Que es IMC
            </h2>
            <p className="h-[140px] text-white xl:text-lg max-xl:text-base oxygen">
              Iztac Music Company es una productora musical especializada en la
              composición para media. En su equipo se encuentran compositores
              entrenados por los mejores profesores y en las mejores escuelas
              alrededor del mundo incluyendo instituciones como Berklee College
              of Music y países como Francia, La India, Estonia y Estados Unidos
            </p>
          </div>
          <div className="xl:w-[550px] lg:w-[400px] h-full ml-auto p-4">
            <Image src={Banner_Img} alt="image" width={520} height={520} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
