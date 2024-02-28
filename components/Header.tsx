import React from "react";

import SideBar from "./SideBar";
import Image from "next/image";

import iztacLogo from "../assets/iztac_logo_black.png";

const Header = () => {
  return (
    <nav className="bg-[#B99253] flex h-14 w-full px-4 py-2">
      <div className="container mx-[398.5px] px-[15px] flex justify-between items-center">
        <SideBar />

        <Image src={iztacLogo} alt="logo" width={55} height={55} />

        <div>IDENTIFY</div>
      </div>
    </nav>
  );
};

export default Header;
