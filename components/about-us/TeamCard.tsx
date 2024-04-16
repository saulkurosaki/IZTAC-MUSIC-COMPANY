import Image, { StaticImageData } from "next/image";

type TeamCardProps = {
  memberImage: StaticImageData;
  name: string;
  description: string;
};

const TeamCard = ({ memberImage, name, description }: TeamCardProps) => {
  return (
    <div className="w-[50%] h-[50%] max-lg:w-full max-lg:h-[25%] py-6">
      <div className="flex w-full h-full max-lg:flex-col">
        <div className="xl:w-[220px] lg:w-[160px] max-lg:w-full h-full px-[15px] flex justify-center items-center">
          <Image
            src={memberImage}
            alt="team_member_img"
            className="xl:w-[190px] xl:h-[190px] lg:w-[130px] lg:h-[130px] md:w-[285px] md:h-[285px] max-md:w-[200px] max-md:h-[200px] rounded-full"
          />
        </div>
        <div className="xl:w-[440px] lg:w-[320px] h-full px-[15px] max-lg:pt-3 max-md:pt-5">
          <h4 className="w-full text-white xl:text-3xl lg:text-2xl max-lg:text-3xl oxygen md:mb-6 max-md:mb-4">
            {name}
          </h4>
          <p className="w-full text-white xl:text-lg lg:text-base md:text-lg oxygen">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
