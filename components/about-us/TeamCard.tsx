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
        <div className="w-[220px] h-full px-[15px] flex items-center">
          <Image
            src={memberImage}
            alt="team_member_img"
            className="w-[190px] h-[190px] rounded-full"
          />
        </div>
        <div className="w-[440px] h-full px-[15px]">
          <h4 className="w-full text-white text-3xl oxygen mb-6">{name}</h4>
          <p className="w-full text-white text-lg oxygen">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
