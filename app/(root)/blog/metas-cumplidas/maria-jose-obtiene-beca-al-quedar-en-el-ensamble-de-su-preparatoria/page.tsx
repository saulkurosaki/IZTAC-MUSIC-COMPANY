import DetailsHeader from "@/components/blog/blogDetailsPage/DetailsHeader";
import { achievementsInfo } from "@/lib/constants";

const AchievementsDetailsPage2 = () => {
  return (
    <div className="relative bg-[#fff] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-14">
      <DetailsHeader
        title={achievementsInfo[1].title}
        date={achievementsInfo[1].date}
        image={achievementsInfo[1].image}
      />
    </div>
  );
};

export default AchievementsDetailsPage2;
