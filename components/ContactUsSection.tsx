import Image from "next/image";

import ContactUs_Bg from "../assets/contactus_sec_img.svg";
import Link from "next/link";

const ContactUsSection = () => {
  return (
    <section className="relative w-full lg:h-[379px] md:h-[440px] bg-[#B99253] pt-16 pb-52">
      <Image
        src={ContactUs_Bg}
        alt="background"
        className="w-full h-auto object-cover absolute bottom-0 right-0 z-0 overflow-hidden"
      />

      <div className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] lg:h-full md:h-[110px] max-md:h-56 p-0 relative z-10">
        <div className="flex w-full h-full max-md:flex-col">
          <div className="flex md:w-[990px] max-md:w-full md:h-full max-md:h-36 px-[15px] pb-7 flex-col md:justify-around max-md:justify-between">
            <h3 className="w-full h-11 text-4xl font-semibold text-gray-900 oxygen">
              ¿Tienes algún proyecto?
            </h3>
            <p className="w-full h-6 text-gray-800 oxygen">
              Contáctanos para poder apoyarte
            </p>
          </div>
          <div className="md:w-[330px] max-md:w-full md:h-full max-md:h-14 px-[15px] pt-2">
            <div className="w-full h-12 flex justify-end">
              <Link
                href="/contact-us"
                className="w-40 h-full bg-[#2e2414] hover:bg-[#251d10] transition hover:duration-150 text-2xl text-white px-4 py-2 rounded-lg flex justify-center items-center"
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
