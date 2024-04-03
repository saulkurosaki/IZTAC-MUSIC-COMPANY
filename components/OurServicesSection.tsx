import Image from "next/image";

import OurServices1 from "../assets/our_services_image_1.webp";
import OurServices2 from "../assets/our_services_image_2.webp";
import OurServices3 from "../assets/our_services_image_3.webp";
import Link from "next/link";

const OurServicesSection = () => {
  return (
    <section className="w-full h-[775px] bg-[#B99253] py-8">
      <div className="container w-[1320px] h-full px-0">
        <div className="flex w-full h-full items-stretch">
          {/* Card 1 */}
          <div className="w-full h-full px-[15px] py-4">
            <div className="flex flex-col w-full h-full overflow-hidden shadow-1 bg-white rounded-[0.4rem]">
              <Image
                src={OurServices1}
                alt="our_services_1"
                className="w-full h-auto object-contain"
              />
              <div className="flex flex-col w-full h-[269px] px-4 pt-3 pb-5 justify-around">
                <h3 className="w-[95%] h-[85px] oxygen text-4xl">
                  Asesoría Artística y Vocal Coaching
                </h3>
                <p className="w-full h-[72px] oxygen ">
                  Asesorías personalizadas para artistas, cantantes,
                  productores, compositores y músicos que buscan impulsar su
                  carrera.
                </p>
                <div className="w-full h-11">
                  <Link
                    href="/contact-us"
                    className="flex w-32 h-full bg-[#2e2414] justify-center items-center text-white text-lg oxygen rounded-md"
                  >
                    Contáctanos
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full h-full px-[15px] py-4">
            <div className="flex flex-col w-full h-full overflow-hidden shadow-1 bg-white rounded-[0.4rem]">
              <Image
                src={OurServices2}
                alt="our_services_2"
                className="w-full h-auto object-contain"
              />
              {/* <div className="flex flex-col w-full h-[269px] px-4 pt-3 pb-5 justify-around">
                <h3 className="w-[95%] h-[85px] oxygen text-4xl">
                  Composición para Media
                </h3>
                <p className="w-full h-[72px] oxygen ">
                  Composiciones personalizadas para cine, televisión,
                  comerciales y videojuegos adaptables a presupuesto y
                  objetivos.
                </p>
                <div className="w-full h-11">
                  <Link
                    href="/contact-us"
                    className="flex w-32 h-full bg-[#2e2414] justify-center items-center text-white text-lg oxygen rounded-md"
                  >
                    Contáctanos
                  </Link>
                </div>
              </div> */}
            </div>
          </div>

          {/* Card 3 */}
          {/* <div className="w-full h-full px-[15px] py-4">
            <div className="flex flex-col w-full h-full overflow-hidden shadow-1 bg-white rounded-[0.4rem]">
              <Image
                src={OurServices3}
                alt="our_services_3"
                className="w-full h-auto object-contain"
              />
              <div className="flex flex-col w-full h-[269px] px-4 pt-3 pb-5 justify-around">
                <h3 className="w-[95%] h-[85px] oxygen text-4xl">
                  Mezcla y Masterización
                </h3>
                <p className="w-full h-[72px] oxygen ">
                  Ingeniería profesional y eficaz para la mezcla y masterización
                  de proyectos musicales.
                </p>
                <div className="w-full h-11">
                  <Link
                    href="/contact-us"
                    className="flex w-32 h-full bg-[#2e2414] justify-center items-center text-white text-lg oxygen rounded-md"
                  >
                    Contáctanos
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
