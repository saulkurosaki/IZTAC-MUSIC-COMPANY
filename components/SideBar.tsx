"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useWindowSize } from "@/lib/utils";
import hamburger from "../assets/hamburger.png";
import mail_logo from "../assets/mail_logo.png";
import iztacLogo from "../assets/iztac_logo_white.png";

const SideBar = () => {
  const size = useWindowSize();

  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex lg:w-[91px] lg:h-[37.5px] justify-center items-center">
          <Image
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="opacity-65"
          />
        </div>
      </SheetTrigger>
      <SheetContent
        side={size.width > 768 ? "left" : "right"}
        className="bg-[#B99253] w-[400px] max-sm:w-full border-none"
      >
        <SheetHeader className="h-full">
          <SheetTitle className="flex text-[26px] text-[#2b2f35] mb-5">
            <Link href="/">
              <Image
                src={iztacLogo}
                alt="logo"
                width={70}
                height={70}
                className="inline-flex"
              />
            </Link>
          </SheetTitle>
          <SheetDescription className="h-full text-lg text-[#252525b8]">
            <div className="flex flex-col justify-between h-full">
              <ul className="flex flex-col h-[40%] justify-between items-start">
                <Link href="/">Inicio</Link>
                <Link href="/our-services">Servicios</Link>
                <Link href="/blog">Nuestros Logros</Link>
                <Link href="/about-us">Sobre Nosotros</Link>
                <Link href="/contact-us">Contáctenos</Link>

                <div className="w-full border-b-[1px] border-[#25252562] mt-4 mb-16" />

                <Link
                  href="mailto:iztacmusicofficial@gmail.com"
                  className="w-full h-5 flex items-center"
                >
                  <Image
                    src={mail_logo}
                    alt="mail_logo"
                    width={15}
                    height={15}
                    className="inline-block mr-[6px] pt-[2px]"
                  />
                  <p className="inline-block font-semibold">
                    iztacmusicofficial@gmail.com
                  </p>
                </Link>
              </ul>

              <Link
                href="/contact-us"
                className="flex w-full h-9 bg-[#2e2414] rounded-lg justify-center items-center"
              >
                <p className="text-white text-[15px]">Contáctenos</p>
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
