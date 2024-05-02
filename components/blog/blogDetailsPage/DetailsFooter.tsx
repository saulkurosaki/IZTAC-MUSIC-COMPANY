import Image, { StaticImageData } from "next/image";

import RightArrow from "@/assets/right_arrow_img.svg";
import Link from "next/link";

type DetailsFooterProps = {
  title: string;
  date: string;
  image: StaticImageData;
  url: string;
};

const DetailsFooter = ({ title, date, image, url }: DetailsFooterProps) => {
  return (
    <Link href={url}>
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
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))`,
            }}
          />
        </span>

        <div className="absolute inset-0 z-20 container xl:w-[1320px] lg:w-[960px] md:w-[720px] max-md:w-full h-auto text-[#eee] font-light px-[15px] oxygen">
          <div className="w-full h-full flex flex-col justify-center">
            <h1 className="w-full h-auto mb-2 text-center xl:text-[55px] lg:text-[50px] md:text-[40px] max-md:text-[30px] leading-tight">
              {title}
            </h1>
            <p className="w-full text-xl flex justify-center 2xl:mb-7 xl:mb-3 md:mb-5 max-md:mb-3">
              {date}
            </p>
            <div className="w-full 2xl:h-[75px] xl:h-16 max-xl:h-14 flex justify-center">
              <Image
                src={RightArrow}
                alt="right_arrow"
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default DetailsFooter;
