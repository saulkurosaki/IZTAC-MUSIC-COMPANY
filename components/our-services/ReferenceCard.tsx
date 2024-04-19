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
      <div className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] xl:h-full lg:h-[220px] md:h-[280px] px-[15px]">
        <div className="xl:w-[645px] lg:w-[465px] md:w-[345px] h-full mx-auto flex">
          <div className="w-12 h-12 bg-[#2e2414] rounded-tl-lg rounded-bl-lg p-4 max-md:flex justify-center items-center">
            <Image src={QuoteSvg} alt="quote" />
          </div>
          <div className="xl:w-[597px] lg:w-[417px] md:w-[297px] max-md:w-[347px] h-full bg-white p-6 flex flex-col">
            <p className="w-full lg:h-[90px] md:h-[150px] max-md:h-auto oxygen text-black xl:text-2xl max-xl:text-xl italic font-light xl:mb-4 md:mb-8 max-md:mb-6">
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
              <p className="w-auto h-auto lg:text-xl md:text-lg max-md:text-base text-[#959595] font-semibold italic oxygen">
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
