import DetailsHeader from "@/components/blog/blogDetailsPage/DetailsHeader";
import { achievementsInfo } from "@/lib/constants";

const AchievementsDetailsPage3 = () => {
  return (
    <div className="relative bg-[#fff] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-14">
      <DetailsHeader
        title={achievementsInfo[2].title}
        date={achievementsInfo[2].date}
        image={achievementsInfo[2].image}
      />
    </div>
  );
};

export default AchievementsDetailsPage3;
