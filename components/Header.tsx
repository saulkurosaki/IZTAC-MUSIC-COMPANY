import React from "react";

import SideBar from "./SideBar";
import Image from "next/image";

import iztacLogo from "../assets/iztac_logo_white.png";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-[#B99253] flex max-md:h-14 h-[72px] lg:h-14 w-full px-[16px] py-[8px] fixed top-0 z-[1030]">
      <div className="flex w-full md:mx-[8px] lg:mx-[16px] xl:mx-[44px] 2xl:mx-[604px] md:py-[8px] px-[15px] justify-between items-center">
        <div className="hidden lg:flex">
          <SideBar />
        </div>

        <Link href="/">
          <Image src={iztacLogo} alt="logo" width={45} height={45} />
        </Link>

        <Link
          href="/about-us"
          className="hidden lg:flex w-[91px] justify-center items-center"
        >
          <p className="text-[18px] text-[#2b2f35] oxygen">Conócenos</p>
        </Link>

        <div className="flex lg:hidden">
          <SideBar />
        </div>
      </div>
    </nav>
  );
};

export default Header;
