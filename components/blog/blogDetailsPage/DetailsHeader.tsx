import Image, { StaticImageData } from "next/image";

type DetailsHeaderProps = {
  title: string;
  date: string;
  image: StaticImageData;
};

const DetailsHeader = ({ title, date, image }: DetailsHeaderProps) => {
  return (
    <section className="relative w-full 2xl:h-[622px] max-2xl:h-[497px]">
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

      <div className="absolute inset-0 z-20 container xl:w-[1320px] lg:w-[960px] md:w-[720px] max-md:w-full h-full px-[15px] flex items-center">
        <div className="w-full text-[#eee] font-light oxygen">
          <h1 className="w-full xl:text-[57px] md:text-5xl max-md:text-[35px] mb-3 leading-tight flex justify-center text-center">
            {title}
          </h1>
          <h5 className="w-full text-xl flex justify-center">{date}</h5>
        </div>
      </div>
    </section>
  );
};

export default DetailsHeader;
