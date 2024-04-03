import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
};

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  return (
    <div className="w-full h-full px-[15px] py-4">
      <div className="flex flex-col w-full h-full overflow-hidden shadow-1 bg-white rounded-[0.4rem]">
        <Image
          src={image}
          alt="our_services_image"
          className="w-full h-auto object-contain"
        />
        <div className="flex flex-col w-full xl:h-[269px] lg:h-[328px] px-4 pt-3 pb-5 xl:justify-around max-xl:justify-between">
          <h3 className="xl:w-[95%] max-xl:w-full h-[85px] oxygen lg:text-4xl text-gray-800">
            {title}
          </h3>
          <p className="w-full h-[72px] oxygen text-gray-700">{description}</p>
          <div className="w-full h-11">
            <Link
              href="/contact-us"
              className="flex w-32 h-full bg-[#2e2414] justify-center items-center text-white text-lg oxygen rounded-md"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
