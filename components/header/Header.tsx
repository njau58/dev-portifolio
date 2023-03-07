import React from "react";
import { useState } from "react";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import MenuIcon from "../mobile-menu/MenuIcon";
import Menu from "../mobile-menu/Menu";
import NavLinks from "./NavLinks";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };


  const sendMessage = () =>{
    
  }
  return (
    <>
      <div className="h-28 flex flex-row justify-between items-center  mx-auto z-50 ">
        <Logo />
        <NavLinks desktopStyles='flex-row items-center just space-x-16 text-primary-text-color font-semibold cursor-pointer hidden md:flex' />

        <div className="hidden md:flex">
          <Button
          handleOnclick={sendMessage}
            label="Contact Me"
            labelColor="text-white"
            backGround="bg-primary-color"
            borderRadius="rounded-none"
            hover="hover:border-primary-color hover:border-2 hover:bg-white hover:text-primary-color hover:ease-in-out hover:duration-700"
          />
        </div>

        <MenuIcon toggle={toggle} setToggle={handleToggle}></MenuIcon>
      </div>

      <Menu toggle={toggle}></Menu>
    </>
  );
};

export default Header;
