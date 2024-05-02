import Image from "next/image";
import Link from "next/link";
import React from "react";

import SoundCloud_Logo from "../assets/soundcloud_logo.png";
import Mail_Logo from "../assets/mail_logo.png";
import iztacLogo from "../assets/iztac_logo_white.png";

const Footer = () => {
  return (
    <footer className="relative w-full xl:h-[438px] lg:h-[377px] max-md:h-[640px] bg-[#2e2414] z-20">
      <div className="w-full xl:h-[381px] lg:h-[320px]">
        <div className="w-full md:h-[138px] max-md:h-64 pt-4">
          <div className="container w-full h-full px-[15px]">
            <div className="flex w-full h-[54px] justify-center md:mb-2 max-md:mb-4">
              <Link
                target="_blank"
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
            <p className="w-full md:h-6 max-md:h-24 mb-3 text-center text-white oxygen text-lg">
              Blvd. Universitario 399-21, Plaza Palmas II, Oficina 16 •
              Juriquilla QRO 76230 • México
            </p>
            <div className="w-full h-5 mb-4 flex justify-center">
              <div className="w-[269px] h-full flex justify-between">
                <Image
                  src={Mail_Logo}
                  alt="mail"
                  width={24}
                  className="relative top-[2px]"
                />
                <Link
                  href="/contact-us"
                  className="text-[#b8a383] hover:text-[#b59259] text-lg oxygen flex items-center cursor-pointer"
                >
                  Iztacmusicofficial@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:h-[243px] lg:h-44 max-md:h-[330px] py-4 flex justify-center">
          <Link href="/">
            <Image src={iztacLogo} alt="main_logo" className="h-full w-auto" />
          </Link>
        </div>
      </div>
      <div className="w-full md:h-[57px] max-md:h-12 flex justify-center items-center">
        <p className="w-96 h-full text-white oxygen md:text-lg max-md:text-base text-center">
          Copyright © Iztac Music Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;
