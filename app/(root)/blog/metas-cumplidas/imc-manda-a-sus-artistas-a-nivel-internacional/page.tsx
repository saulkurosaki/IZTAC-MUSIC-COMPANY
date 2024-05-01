import DetailsHeader from "@/components/blog/blogDetailsPage/DetailsHeader";
import { achievementsHeaders } from "@/lib/constants";

const AchievementsDetailsPage1 = () => {
  return (
    <div className="relative bg-[#fff] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-14">
      <DetailsHeader
        title={achievementsHeaders[0].title}
        date={achievementsHeaders[0].date}
        image={achievementsHeaders[0].image}
      />
    </div>
  );
};

export default AchievementsDetailsPage1;
