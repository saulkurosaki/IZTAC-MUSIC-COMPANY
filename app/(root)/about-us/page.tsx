import Achievements from "@/components/about-us/Achievements";
import Header from "@/components/about-us/Header";
import WhoAreWe from "@/components/about-us/WhoAreWe";

const AboutUsPage = () => {
  return (
    <div className="relative bg-[#2e2414] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-12">
      <Header />

      <WhoAreWe />

      <Achievements />
    </div>
  );
};

export default AboutUsPage;
