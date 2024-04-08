import Image from "next/image";
import Link from "next/link";
import React from "react";

import SoundCloud_Logo from "../assets/soundcloud_logo.png";
import Main_Logo from "../assets/mail_logo.png";

const Footer = () => {
  return (
    <footer className="w-full h-[438px] bg-[#2e2414]">
      <div className="w-full h-[381px]">
        <div className="w-full h-[138px] pt-8">
          <div className="container w-[1320px] h-full px-[15px]">
            <div className="flex w-full h-[54px] justify-center mb-2">
              <Link
                href="https://soundcloud.com/zackarymc101?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                className="w-[54px] h-[54px] rounded-full bg-white cursor-pointer"
              >
                <Image
                  src={SoundCloud_Logo}
                  alt="soundcloud_logo"
                  width={40}
                  className="relative top-[14px] left-[7px]"
                />
              </Link>
            </div>
            {/* <p className="w-full h-6 mb-3 text-center text-white oxygen text-lg">
              Blvd. Universitario 399-21, Plaza Palmas II, Oficina 16 •
              Juriquilla QRO 76230 • México
            </p> */}
            {/* <div className="w-full h-5 mb-4 flex justify-center">
              <div className="w-[269px] h-full flex justify-between">
                <Image
                  src={Main_Logo}
                  alt="mail"
                  width={24}
                  className="relative top-[2px]"
                />
                <Link
                  href="mailto:Iztacmusicofficial@gmail.com"
                  className="text-[#B99253] text-lg oxygen flex items-center cursor-pointer"
                >
                  Iztacmusicofficial@gmail.com
                </Link>
              </div>
            </div> */}
          </div>
        </div>
        <div className="w-full h-[243px] py-4"></div>
      </div>
      <div className="w-full h-[57px]"></div>
    </footer>
  );
};

export default Footer;
