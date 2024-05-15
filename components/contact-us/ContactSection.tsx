import Image from "next/image";

import MailLogo from "../../assets/mail_logo.png";
import LocationLogo from "../../assets/location_img.svg";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="w-full xl:h-[546px] lg:h-[570px] md:h-[690px] max-md:h-[1030px] bg-white py-10">
      <div className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] max-md:w-[320px] md:h-full max-md:h-[958px] px-0">
        <div className="w-full h-full flex max-lg:flex-col">
          <div className="xl:w-[880px] lg:w-[640px] max-lg:w-full lg:h-full md:h-[466px] max-md:h-[766px] max-lg:mt-6 px-[15px]">
            <p className="w-full xl:h-12 lg:h-[72px] md:h-[48px] max-md:h-[120px] mb-4 lg:text-lg md:text-base max-md:text-lg text-[#727272] flex items-center oxygen">
              Mándenos mensaje sobre cualquier cosa relacionada con nuestra
              empresa o servicios. <br />
              Haremos todo lo posible para contactarle lo antes posible.
            </p>
            <div className="w-full md:h-[402px] max-md:h-[630px]">
              <ContactForm />
            </div>
          </div>
          <div className="xl:w-[440px] lg:w-[320px] md:w-[720px] max-md:w-[320px] lg:h-full md:h-[96px] max-md:h-[144px] max-lg:mt-6 px-[15px]">
            <div className="xl:w-[410px] lg:w-[290px] md:w-[690px] max-md:w-[290px] xl:h-24 lg:h-36 max-lg:h-full pl-2">
              <p className="w-full h-6 text-[#6C757D] oxygen">
                IMC (Iztac Music Company)
              </p>
              <p className="w-full xl:h-6 lg:h-12 md:h-6 max-md:h-12 flex text-[#6C757D] oxygen">
                <Image
                  src={LocationLogo}
                  alt="location_logo"
                  className="w-[21px] h-full mr-2 p-[2px]"
                />
                <span>Blvd. Universitario 399-21, Plaza Palmas II</span>
              </p>
              <p className="w-full xl:h-6 lg:h-12 md:h-6 max-md:h-12 text-[#6C757D] oxygen">
                Oficina 16 • Juriquilla QRO 76230 • México
              </p>
              <p className="w-full h-6 flex text-[#6C757D] oxygen">
                <Image
                  src={MailLogo}
                  alt="mail_logo"
                  className="w-[21px] h-full mr-2 px-[2px] pt-[3px] pb-[1px] object-contain"
                />
                <span>iztacmusicofficial@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
