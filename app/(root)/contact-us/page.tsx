import Footer from "@/components/Footer";
import ContactSection from "@/components/contact-us/ContactSection";
import Header from "@/components/contact-us/Header";

const ContactUsPage = () => {
  return (
    <div className="relative bg-[#2e2414] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-12">
      <Header />

      <ContactSection />

      <Footer />
    </div>
  );
};

export default ContactUsPage;
