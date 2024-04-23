import Footer from "@/components/Footer";
import OurServicesSection from "@/components/OurServicesSection";
import BusinessReferences from "@/components/our-services/BusinessReferences";
import Header from "@/components/our-services/Header";
import OurReferences from "@/components/our-services/OurReferences";

const OurServicesPage = () => {
  return (
    <div className="relative bg-[#2e2414] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-12">
      <Header />

      <OurServicesSection />

      <OurReferences />

      <BusinessReferences />

      <Footer />
    </div>
  );
};

export default OurServicesPage;
