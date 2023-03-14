import React from "react";
import Logo from "../logo/Logo";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineBehance } from "react-icons/ai";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <hr className=""></hr>
      <div className="flex flex-col justify-center items-center pb-4 md:space-y-0 space-y-4  w-full max-w-7xl mx-auto">
    <div className="flex w-full items-center justify-between">
    <Logo />
     

     <div className="flex flex-row space-x-4">
       <Link href="https://github.com/njau58">
         <a target="_blank">
           <div className="bg-primary-text-color text-secondary-color p-3 rounded-lg text-xl hover:text-primary-color">
             <AiFillGithub />
           </div>
         </a>
       </Link>
       <Link href="https://www.behance.net/simonnjau">
         <a target="_blank">
           <div className="bg-primary-text-color text-secondary-color p-3 rounded-lg text-xl hover:text-primary-color">
             <AiOutlineBehance />
           </div>
         </a>
       </Link>
       <Link href="https://www.linkedin.com/in/njau58/">
         <a target="_blank">
           <div className="bg-primary-text-color text-secondary-color p-3 rounded-lg text-xl hover:text-primary-color">
             <AiFillLinkedin />
           </div>
         </a>
       </Link>
     </div>
    </div>
<div>
Made with{" "}
<span className="inline-block text-red-600">
  <BsFillSuitHeartFill />
</span>{" "}
by Simon.
</div>
      </div>
    </>
  );
};

export default Footer;



