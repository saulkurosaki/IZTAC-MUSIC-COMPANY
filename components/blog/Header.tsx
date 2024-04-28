// import Image from "next/image";

// import HeaderBg from "@/assets/business_references_img_6.svg";
// import Link from "next/link";

const Header = () => {
  return (
    <div className="relative w-full h-[251px] bg-white z-10">
      {/* <span className="relative block w-full h-full">
        <Image
          src={HeaderBg}
          alt="background"
          className="w-full h-full object-cover bg-cover bg-fixed bg-center z-0"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45))`,
          }}
        />
      </span> */}

      {/* <div className="absolute inset-0 py-12 z-20">
        <div className="container w-[1320px] h-full px-[15px]">
          <div className="w-full h-full">
            <div className="w-[89px] h-[29px] rounded-md bg-[#f4f4f4] px-auto mb-2">
              <p className="text-2xl text-[#383838] text-center oxygen">
                Último
              </p>
            </div>
            <Link
              href="/blog/metas-cumplidas/imc-manda-a-sus-artistas-a-nivel-internacional"
              className="w-full text-[#eee] hover:opacity-70 oxygen"
            >
              <h1 className="text-6xl font-light mb-2">
                IMC Manda a Sus Artistas a Nivel Internacional
              </h1>
              <h5 className="text-xl font-light">10 de Enero de 2019</h5>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
