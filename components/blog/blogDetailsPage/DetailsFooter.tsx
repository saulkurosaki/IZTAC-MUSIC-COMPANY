import Image, { StaticImageData } from "next/image";

import RightArrow from "@/assets/right_arrow_img.svg";

type DetailsFooterProps = {
  title: string;
  date: string;
  image: StaticImageData;
};

const DetailsFooter = ({ title, date, image }: DetailsFooterProps) => {
  return (
    <section className="relative w-full 2xl:h-[373px] max-2xl:h-[298px] flex items-center mt-12">
      <span className="relative block w-full h-full">
        <Image
          src={image}
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

      <div className="absolute inset-0 z-20 container xl:w-[1320px] lg:w-[960px] max-lg:w-[720px] h-auto text-[#eee] font-light px-[15px] 2xl:py-12 max-2xl:py-5 oxygen">
        <h1 className="w-full h-auto mb-2 text-center xl:text-[55px] lg:text-[50px] max-lg:text-[40px] leading-tight">
          {title}
        </h1>
        <p className="w-full text-xl flex justify-center 2xl:mb-7 xl:mb-3 max-xl:mb-5">
          {date}
        </p>
        <div className="w-full 2xl:h-[75px] max-2xl:h-16 flex justify-center">
          <Image src={RightArrow} alt="right_arrow" className="w-auto h-auto" />
        </div>
      </div>
    </section>
  );
};

export default DetailsFooter;
