import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type PortfolioCardProps = {
  image: StaticImageData;
  song: string;
};

const PortfolioCard = ({ image, song }: PortfolioCardProps) => (
  <div className="flex flex-col w-auto h-auto px-2">
    <Image
      src={image}
      alt="portfolio_image_1"
      className="w-full h-auto object-cover pb-3 rounded-lg"
    />
    <div className="w-full h-[38px]">
      <Link
        href={song}
        target="_blank"
        className="w-24 h-full flex justify-center items-center rounded-lg text-[#2e2414] text-lg bg-[#B99253] hover:bg-[#bf9e69] transition hover:duration-150 oxygen"
      >
        Escucha
      </Link>
    </div>
  </div>
);

export default PortfolioCard;
