import AboutUsSection from "@/components/AboutUsSection";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <div className="bg-[#2e2414] w-full h-full">
      <HeroBanner />

      <AboutUsSection />
    </div>
  );
}
