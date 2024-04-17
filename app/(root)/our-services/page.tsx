import OurServicesSection from "@/components/OurServicesSection";
import Header from "@/components/our-services/Header";

const OurServicesPage = () => {
  return (
    <div className="relative bg-[#2e2414] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-12">
      <Header />

      <OurServicesSection />
    </div>
  );
};

export default OurServicesPage;
