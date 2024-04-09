import AboutUsSection from "@/components/home/AboutUsSection";
import ContactUsSection from "@/components/home/ContactUsSection";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/home/HeroBanner";
import OurServicesSection from "@/components/home/OurServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";

export default function Home() {
  return (
    <div className="relative bg-[#2e2414] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-12">
      <HeroBanner />

      <AboutUsSection />

      <OurServicesSection />

      <PortfolioSection />

      <ContactUsSection />

      <Footer />
    </div>
  );
}
