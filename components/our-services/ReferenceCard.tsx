import Image, { StaticImageData } from "next/image";

import QuoteSvg from "../../assets/quote_svg.png";

type ReferenceCardProps = {
  quote: string;
  author: string;
  avatar: StaticImageData;
};

const ReferenceCard = ({ quote, author, avatar }: ReferenceCardProps) => {
  return (
    <div className="w-full h-full py-20">
      <div className="container w-[1320px] h-full px-[15px]">
        <div className="w-[645px] h-full mx-auto flex">
          <div className="w-12 h-12 bg-[#2e2414] rounded-tl-lg rounded-bl-lg p-3">
            <Image src={QuoteSvg} alt="quote" />
          </div>
          <div className="w-[597px] h-full bg-white p-6 flex flex-col justify-between">
            <p className="w-full h-[90px] oxygen text-black text-2xl italic font-light">
              {quote}
            </p>
            <div className="w-full h-10 flex items-center">
              <Image
                src={avatar}
                alt="reference_img"
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <p className="w-auto h-auto text-xl text-[#959595] font-semibold italic oxygen">
                {author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceCard;
