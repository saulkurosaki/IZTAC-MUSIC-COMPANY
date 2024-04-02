import AboutUsSection from "@/components/AboutUsSection";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <div className="bg-[#2e2414] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-12">
      <HeroBanner />

      <AboutUsSection />
    </div>
  );
}
