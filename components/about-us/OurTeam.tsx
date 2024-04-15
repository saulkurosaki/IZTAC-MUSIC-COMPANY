import Image from "next/image";

import BgImage from "../../assets/our_team_bg_img.jpg";
import Port_Top_Waves from "../../assets/portfolio_top_waves.svg";
import TeamCard from "./TeamCard";
import { teamMembers } from "@/lib/constants";

const OurTeam = () => {
  return (
    <section className="w-full xl:h-[1037px] lg:h-[895px] md:h-[2392px] relative">
      {/* Bottom Section */}
      <div className="relative w-full xl:h-[380px] lg:h-[373px] md:h-[363px] pt-64 pb-10">
        <span className="absolute inset-0 z-0">
          <Image
            src={BgImage}
            alt="background"
            className="w-full h-full object-cover fixed top-0 left-0 object-top opacity-60"
          />
        </span>
        <div className="w-full h-full absolute overflow-hidden top-0">
          <Image
            src={Port_Top_Waves}
            alt="Top Waves"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="container xl:w-[1320px] lg:w-[960px] h-full px-[15px]">
          <h2 className="w-full h-full mb-2 text-white xl:text-[65px] lg:text-6xl md:text-5xl oxygen relative z-10 flex justify-center items-center">
            NUESTRO EQUIPO
          </h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full xl:h-[657px] lg:h-[522px] md:h-[2029px] py-12 bg-[#2e2414] relative z-10">
        <div className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] h-full px-0">
          <div className="w-full h-full flex flex-wrap max-lg:flex-col">
            <TeamCard
              memberImage={teamMembers.Isaac.image}
              name={teamMembers.Isaac.name}
              description={teamMembers.Isaac.description}
            />
            <TeamCard
              memberImage={teamMembers.Giselle.image}
              name={teamMembers.Giselle.name}
              description={teamMembers.Giselle.description}
            />
            <TeamCard
              memberImage={teamMembers.Roxana.image}
              name={teamMembers.Roxana.name}
              description={teamMembers.Roxana.description}
            />
            <TeamCard
              memberImage={teamMembers.Beni.image}
              name={teamMembers.Beni.name}
              description={teamMembers.Beni.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
