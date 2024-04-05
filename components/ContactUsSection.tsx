import Image from "next/image";

import ContactUs_Bg from "../assets/contactus_sec_img.svg";

const ContactUsSection = () => {
  return (
    <section className="relative w-full h-[379px] bg-[#B99253]">
      <Image
        src={ContactUs_Bg}
        alt="background"
        className="w-full h-auto object-cover absolute bottom-0 right-0 z-10 overflow-hidden"
      />
    </section>
  );
};

export default ContactUsSection;
