import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SocialHandles from "./SocialHandles";

const Navbar = () => {
  const sideMenuRef = useRef();

  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className=" fixed top-0 right-0 w-11/12 -z-10">
        <Image src={assets.header_bg_color} alt="" className=" w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <h1 href="#top" className=" font-Outfit font-semibold text-2xl">
          Manjay.
        </h1>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } `}
        >
          <li>
            <a href="#top" className=" font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className=" font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className=" font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className=" font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className=" font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div className=" flex items-center gap-4 md:gap-6 lg:gap-12">
          <button>
            <Image src={assets.moon_icon} alt="" className=" w-6" />
          </button>

          <div className=" hidden md:block">
            <SocialHandles />
          </div>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className=" w-6" />
          </button>
        </div>

        {/* mobile menu  */}

        <ul
          ref={sideMenuRef}
          className=" flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className=" absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className=" w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" className=" font-Ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className=" font-Ovo" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" className=" font-Ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className=" font-Ovo" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className=" font-Ovo" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
