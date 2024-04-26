import Image from "next/image";
import MailLogo from "../../assets/mail_logo.png";
import LocationLogo from "../../assets/location_img.svg";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="w-full h-[546px] bg-white py-10">
      <div className="container w-[1320px] h-full px-0">
        <div className="w-full h-full flex">
          <div className="w-[880px] h-full px-[15px]">
            <p className="w-full h-12 mb-4 text-lg text-[#727272] flex items-center oxygen">
              Mándenos mensaje sobre cualquier cosa relacionada con nuestra
              empresa o servicios. <br />
              Haremos todo lo posible para contactarle lo antes posible.
            </p>
            <div className="w-full h-[402px]">
              <ContactForm />
            </div>
          </div>
          <div className="w-[440px] h-full px-[15px]">
            <div className="w-[410px] h-24 pl-2">
              <p className="w-full h-6 text-[#6C757D] oxygen">
                IMC (Iztac Music Company)
              </p>
              <p className="w-full h-6 flex text-[#6C757D] oxygen">
                <Image
                  src={LocationLogo}
                  alt="location_logo"
                  className="w-[21px] h-full mr-2 p-[2px]"
                />
                <span>Blvd. Universitario 399-21, Plaza Palmas II</span>
              </p>
              <p className="w-full h-6 text-[#6C757D] oxygen">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oficina 16 •
                Juriquilla QRO 76230 • México
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
    </div>
  );
};

export default ContactSection;
