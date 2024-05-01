import Image, { StaticImageData } from "next/image";

import RightArrow from "@/assets/right_arrow_img.svg";

type DetailsFooterProps = {
  title: string;
  date: string;
  image: StaticImageData;
};

const DetailsFooter = ({ title, date, image }: DetailsFooterProps) => {
  return (
    <section className="relative w-full h-[373px] flex items-center mt-12">
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

      <div className="absolute inset-0 z-20 container w-[1320px] h-auto text-[#eee] font-light px-[15px] py-12 oxygen">
        <h1 className="w-full h-auto mb-2 text-center text-[55px] leading-tight">
          {title}
        </h1>
        <p className="w-full text-xl flex justify-center mb-7">{date}</p>
        <div className="w-full h-[75px] flex justify-center">
          <Image
            src={RightArrow}
            alt="right_arrow"
            width={75}
            height={75}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default DetailsFooter;
