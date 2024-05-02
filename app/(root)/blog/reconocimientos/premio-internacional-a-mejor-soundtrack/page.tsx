import DetailsHeader from "@/components/blog/blogDetailsPage/DetailsHeader";
import { recognitionsInfo } from "@/lib/constants";

const RecognitionsDetailsPage4 = () => {
  return (
    <div className="relative bg-[#fff] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-14">
      <DetailsHeader
        title={recognitionsInfo[3].title}
        date={recognitionsInfo[3].date}
        image={recognitionsInfo[3].image}
      />
    </div>
  );
};

export default RecognitionsDetailsPage4;
