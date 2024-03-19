import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import hamburger from "../assets/hamburger.png";
import Image from "next/image";

const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex lg:w-[91px] lg:h-[37.5px] justify-center items-center">
          {/* <Image
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="opacity-65"
          /> */}
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
