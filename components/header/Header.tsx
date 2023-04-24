import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import MenuIcon from "../mobile-menu/MenuIcon";
import Menu from "../mobile-menu/Menu";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [shadow, setShadow] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  //setting shadow on header on scrolling 400px Y-axis

  const setStyle = () => {
    if (window.scrollY >= 100) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setStyle);
  }, []);

  return (
    <>
      <div
        className={`${
          shadow
            ? "shadow-lg h-20 ease-in-out delay-75  bg-white bg-opacity-95 top-0 flex flex-row justify-between items-center z-40  mx-auto  fixed shadow- w-full md:px-32 px-8 "
            : "h-28 bg-white top-0 ease-in-out delay-75  flex flex-row justify-between items-center  mx-auto z-40 fixed  w-full md:px-32 px-8 "
        }`}
      >
         <Logo />
        <NavLinks desktopStyles="flex-row items-center just space-x-16 text-primary-text-color font-semibold cursor-pointer hidden md:flex" />

        <div className="hidden md:flex">
          <Link href="#contact" scroll={false}>
            <a className="border-[1px] border-primary-color bg-primary-color text-white py-2 px-4 text-sm  hover:bg-white hover:ease-in-out hover:duration-300 hover:text-primary-color  hover:border-primary-color">
              Contact Me
            </a>
          </Link>
        </div> 
        
        <MenuIcon toggle={toggle} setToggle={handleToggle}></MenuIcon> 
   
      </div>
      <Menu toggle={toggle} setToggle={handleToggle}></Menu>
    
    </>
  );
};

export default Header;
