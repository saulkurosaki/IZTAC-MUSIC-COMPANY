import AboutUsSection from "@/components/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection";
import HeroBanner from "@/components/HeroBanner";
import OurServicesSection from "@/components/OurServicesSection";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <div className="bg-[#2e2414] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-12">
      <HeroBanner />

      <AboutUsSection />

      <OurServicesSection />

      <PortfolioSection />

      <ContactUsSection />
    </div>
  );
}
