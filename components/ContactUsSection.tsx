import Image from "next/image";

import ContactUs_Bg from "../assets/contactus_sec_img.svg";
import Link from "next/link";

const ContactUsSection = () => {
  return (
    <section className="relative w-full lg:h-[379px] md: bg-[#B99253] pt-16 pb-52">
      <Image
        src={ContactUs_Bg}
        alt="background"
        className="w-full h-auto object-cover absolute bottom-0 right-0 z-0 overflow-hidden"
      />

      <div className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] h-full p-0 relative z-10">
        <div className="flex w-full h-full">
          <div className="flex w-[990px] h-full px-[15px] pb-7 flex-col justify-around">
            <h3 className="w-full h-11 text-4xl font-semibold text-gray-900 oxygen">
              ¿Tienes algún proyecto?
            </h3>
            <p className="w-full h-6 text-gray-800 oxygen">
              Contáctanos para poder apoyarte
            </p>
          </div>
          <div className="w-[330px] h-full px-[15px] pt-2">
            <div className="w-full h-12 flex justify-end">
              <Link
                href="/contact-us"
                className="w-40 h-full bg-[#2e2414] text-2xl text-white px-4 py-2 rounded-md flex justify-center items-center"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
