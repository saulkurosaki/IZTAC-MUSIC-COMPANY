import Navbar from "@/components/blog/Navbar";
import AchievementsPosts from "@/components/blog/achievements/AchievementsPosts";
import Header from "@/components/blog/achievements/Header";

const AchievementsPage = () => {
  return (
    <div className="relative bg-[#fff] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-14">
      <Header />

      <Navbar category="achievements" />

      <AchievementsPosts />
    </div>
  );
};

export default AchievementsPage;
