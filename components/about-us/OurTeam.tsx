import Image from "next/image";

import BgImage from "../../assets/our_team_bg_img.jpg";
import Port_Top_Waves from "../../assets/portfolio_top_waves.svg";
import Member_1 from "../../assets/our_team_img_1.webp";
import Member_2 from "../../assets/our_team_img_2.webp";
import Member_3 from "../../assets/our_team_img_3.webp";
import Member_4 from "../../assets/our_team_img_4.webp";

const OurTeam = () => {
  return (
    <section className="w-full h-[1037px] relative">
      <div className="relative w-full h-[380px] pt-64 pb-10">
        <span className="absolute inset-0 z-0">
          <Image
            src={BgImage}
            alt="background"
            className="w-full h-full object-cover fixed top-0 left-0 object-top opacity-60"
          />
        </span>
        <div className="w-full h-full absolute overflow-hidden top-0">
          <Image
            src={Port_Top_Waves}
            alt="Top Waves"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="container w-[1320px] h-full px-[15px]">
          <h2 className="w-full h-full mb-2 text-white text-[65px] oxygen relative z-10 flex justify-center items-center">
            NUESTRO EQUIPO
          </h2>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

//
{
  /* <div className="w-full h-[657px] py-12 bg-[#2e2414] relative z-10">
        <div className="container w-[1320px] h-full px-0">

        </div>
      </div> */
}

// 4 Cards
{
  /* <div className="w-full h-full flex flex-wrap">
            <div className="w-[50%] h-[50%] py-6">
              <div className="flex w-full h-full">
                <div className="w-[220px] h-full px-[15px] flex items-center">
                  <Image
                    src={Member_1}
                    alt="team_member_img"
                    className="w-[190px] h-[190px] rounded-full"
                  />
                </div>
                <div className="w-[440px] h-full px-[15px]">
                  <h4 className="w-full text-white text-3xl oxygen mb-6">
                    Isaac Maldonado, CEO
                  </h4>
                  <p className="w-full text-white text-lg oxygen">
                    Fundador y director de IMC. También es compositor, vocal
                    coach y asesor artístico con más de 10 años de experiencia
                    en la industria
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[50%] py-6">
              <div className="flex w-full h-full">
                <div className="w-[220px] h-full px-[15px] flex items-center">
                  <Image
                    src={Member_2}
                    alt="team_member_img"
                    className="w-[190px] h-[190px] rounded-full"
                  />
                </div>
                <div className="w-[440px] h-full px-[15px]">
                  <h4 className="w-full text-white text-3xl oxygen mb-6">
                    Giselle Maldonado, Liricista
                  </h4>
                  <p className="w-full text-white text-lg oxygen">
                    Compositora, liricista y Creadora creativa
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[50%] py-6">
              <div className="flex w-full h-full">
                <div className="w-[220px] h-full px-[15px] flex items-center">
                  <Image
                    src={Member_3}
                    alt="team_member_img"
                    className="w-[190px] h-[190px] rounded-full"
                  />
                </div>
                <div className="w-[440px] h-full px-[15px]">
                  <h4 className="w-full text-white text-3xl oxygen mb-6">
                    Roxana Ceballos, Administradora
                  </h4>
                  <p className="w-full text-white text-lg oxygen">
                    Encargada de Administración y relaciones internacionales
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[50%] py-6">
              <div className="flex w-full h-full">
                <div className="w-[220px] h-full px-[15px] flex items-center">
                  <Image
                    src={Member_4}
                    alt="team_member_img"
                    className="w-[190px] h-[190px] rounded-full"
                  />
                </div>
                <div className="w-[440px] h-full px-[15px]">
                  <h4 className="w-full text-white text-3xl oxygen mb-6">
                    Beni Choi, Asistente
                  </h4>
                  <p className="w-full text-white text-lg oxygen">
                    Asistente en los diversos departamentos
                  </p>
                </div>
              </div>
            </div>
          </div> */
}
