import Image, { StaticImageData } from "next/image";

type TeamCardProps = {
  memberImage: StaticImageData;
  name: string;
  description: string;
};

const TeamCard = ({ memberImage, name, description }: TeamCardProps) => {
  return (
    <div className="w-[50%] h-[50%] py-6">
      <div className="flex w-full h-full">
        <div className="xl:w-[220px] lg:w-[160px] h-full px-[15px] flex items-center">
          <Image
            src={memberImage}
            alt="team_member_img"
            className="xl:w-[190px] xl:h-[190px] lg:w-[130px] lg:h-[130px] rounded-full"
          />
        </div>
        <div className="xl:w-[440px] lg:w-[320px] h-full px-[15px]">
          <h4 className="w-full text-white xl:text-3xl lg:text-2xl oxygen mb-6">
            {name}
          </h4>
          <p className="w-full text-white xl:text-lg lg:text-base oxygen">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
