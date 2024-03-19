import React from "react";

import SideBar from "./SideBar";
import Image from "next/image";

import iztacLogo from "../assets/iztac_logo_white.png";

const Header = () => {
  return (
    <nav className="bg-[#B99253] flex max-md:h-14 h-[72px] lg:h-14 w-full px-[16px] py-[8px]">
      <div className="w-full md:mx-[8px] lg:mx-[16px] md:py-[8px] xl:mx-[44px] px-[15px] flex justify-between items-center">
        {/* <div className="hidden lg:flex">
          <SideBar />
        </div> */}

        {/* <Image src={iztacLogo} alt="logo" width={45} height={45} /> */}

        {/* <div className="hidden lg:flex w-[91px] justify-center items-center">
          <p className="text-[18px] font-medium text-[#2b2f35]">Conócenos</p>
        </div> */}

        {/* <div className="flex lg:hidden">
          <SideBar />
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
