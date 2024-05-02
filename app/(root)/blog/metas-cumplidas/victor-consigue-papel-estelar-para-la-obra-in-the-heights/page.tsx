import DetailsHeader from "@/components/blog/blogDetailsPage/DetailsHeader";
import { achievementsInfo } from "@/lib/constants";

const AchievementsDetailsPage4 = () => {
  return (
    <div className="relative bg-[#fff] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-14">
      <DetailsHeader
        title={achievementsInfo[3].title}
        date={achievementsInfo[3].date}
        image={achievementsInfo[3].image}
      />
    </div>
  );
};

export default AchievementsDetailsPage4;
