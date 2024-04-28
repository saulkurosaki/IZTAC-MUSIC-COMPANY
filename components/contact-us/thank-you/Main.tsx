import Image from "next/image";

import ThumbsUp from "@/assets/thumbs_up_img.png";
import Tick from "@/assets/tick_img.svg";
import MailLogo from "@/assets/mail_logo.png";
import LocationLogo from "@/assets/location_img.svg";

const Main = () => {
  return (
    <section className="w-full 2xl:h-[636px] xl:h-[410px] lg:h-[471px] md:h-[484px] max-md:h-[515px] bg-white">
      <div className="w-full xl:h-[405px] lg:h-[398px] max-lg:h-full py-10">
        <div className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] max-md:w-full h-full px-0">
          <div className="w-full h-full flex max-lg:flex-col">
            <div className="xl:w-[660px] lg:w-[560px] max-lg:w-full lg:h-full md:h-[308px] max-md:h-[315px] px-[15px] lg:mr-auto">
              <div className="w-28 h-28 mx-auto mb-[19px] p-5 rounded-full bg-[#B99253]">
                <Image
                  src={ThumbsUp}
                  alt="thumb_img"
                  className="w-full h-full opacity-80"
                />
              </div>
              <h1 className="w-full lg:h-[74px] md:h-[58px] max-md:h-[41px] mb-2 text-center lg:text-[62px] md:text-[50px] max-md:text-4xl oxygen">
                ¡Gracias!
              </h1>
              <div className="w-full h-[33px] flex justify-center items-center">
                <div className="w-[60%] border border-t-[#000]" />
              </div>
              <div className="md:w-full max-md:w-[290px] max-md:mx-auto flex justify-center items-center mb-2">
                <Image
                  src={Tick}
                  alt="tick_img"
                  className="w-[25px] h-[25px] object-contain mr-[6px] pt-1 max-md:hidden"
                />
                <h5 className="md:text-[21px] max-md: text-xl text-center oxygen">
                  Su mensaje ha sido enviado{" "}
                  <span className="font-bold">correctamente</span>
                </h5>
              </div>
              <p className="w-full h-6 mb-4 flex justify-center items-center md:text-lg max-md:text-base font-light oxygen">
                Le contestaremos en breve.
              </p>
            </div>
            <div className="xl:w-[440px] lg:w-[320px] max-lg:w-full lg:h-full md:h-[96px] max-md:h-[120px] px-[15px]">
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
      </div>
    </section>
  );
};

export default Main;
