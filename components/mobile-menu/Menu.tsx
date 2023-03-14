import React from "react";
import NavLinks from "../header/NavLinks";
import Link from "next/link";

interface Props {
  toggle: boolean;
}

const Menu = ({ toggle }: Props) => {
  return (
    <>
      <div
        className={`${
          toggle
            ? "hidden"
            : "md:hidden flex z-30  bg-gray-50  flex-col font-semibold text-gray-700  mx-auto  w-auto rounded-sm pb-8 items-start pl-8"
        }`}
      >
        <NavLinks mobileStyles="flex-row space-y-8  py-8 text-red-500" />
        <Link href="#projects" scroll={false}>
          <a className="border-2 border-primary-color bg-primary-color text-white py-2 px-4 text-base font-normal  hover:bg-white hover:ease-in-out hover:duration-300 hover:text-primary-color hover:border-2 hover:border-primary-color">
            Contact Me
          </a>
        </Link>
      </div>
    </>
  );
};

export default Menu;
