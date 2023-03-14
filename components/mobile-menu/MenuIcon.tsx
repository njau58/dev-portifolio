import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

interface Props {
  toggle: boolean;
  setToggle: () => void;
}

const MenuIcon = ({ setToggle }: Props) => {
  return (
    <div className="flex md:hidden z-50 relative">
      <div
        className="text-4xl text-gray-500 ease-out duration-500"
        onClick={setToggle}
      >
        <BiMenuAltRight></BiMenuAltRight>
      </div>
    </div>
  );
};

export default MenuIcon;
