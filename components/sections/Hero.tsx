import React from "react";
import Image from "next/image";
import { heroBanner } from "../../assets/assets";
import Link from "next/link";

const Hero = () => {

    const viewResume = () =>{

    }
    const contactMe = () =>{
        
    }
  return (
    <div className="flex flex-col max-w-7xl md:flex-row items-center  justify-center mx-auto space-y-12 md:mt-32 mt-44 ">
      <div className="flex flex-col items-start justify-start space-y-6 max-w-2xl">
        <div className="flex flex-row justify-center space-x-2">
          <span className="border-b-2 h-3 w-3  border-primary-color"></span>

          <div className="text-primary-color text-sm font-bold">Get Bespoke Solutions</div>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="font-semibold text-5xl text-primary-text-color">
            Hello,
          </span>
          <span className="text-primary-text-color font-bold text-7xl ">
            I'm <span className=" text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-primary-color">Simon</span> 
          </span>{" "}
        </div>

        <p className="text-left">
          Since beginning of my journey as software developer nearby 3 years ago,
          I 've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products.With my natural inclination towards frontend development, I'm  constantly pushing the limits of modern web development.
        </p>

        <div className="flex flex-start justify-between space-x-12">
        <Link href="#contact" scroll={false}>
            <a className="border-[1px] border-primary-color bg-primary-color text-white py-2 px-4 text-small font-normal  hover:bg-white hover:ease-in-out hover:duration-300 hover:text-primary-color  hover:border-primary-color">
              Let's Talk
            </a>
          </Link>
        </div>
      </div>

      <div className="flex md:max-w-5xl justify-end">
        <Image src={heroBanner} height={1500} className="object-contain"></Image>
      </div>
    </div>
  );
};

export default Hero;
