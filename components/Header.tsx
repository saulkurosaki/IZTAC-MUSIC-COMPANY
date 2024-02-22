import React from "react";

import SideBar from "./SideBar";

const Header = () => {
  return (
    <nav className="bg-[#B99253] flex h-14 w-full px-4 py-2">
      <div className="container mx-[398.5px] px-[15px] flex justify-between items-center">
        <SideBar />

        <div>LOGO</div>

        <div>Hi Mates</div>
      </div>
    </nav>
  );
};

export default Header;
