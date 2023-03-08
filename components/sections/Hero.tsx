import React from "react";
import Image from "next/image";
import { heroBanner } from "../../assets/assets";
import Button from "../button/Button";

const Hero = () => {

    const viewResume = () =>{

    }
    const contactMe = () =>{
        
    }
  return (
    <div className="flex flex-col md:flex-row items-center  justify-center mx-auto space-y-12 mt-16 md:mt-0  ">
      <div className="flex flex-col items-start justify-start space-y-6 max-w-2xl">
        <div className="flex flex-row justify-center space-x-2">
          <span className="border-b-2 h-3 w-3  border-primary-color"></span>

          <div className="text-primary-color text-sm">Bespoke Solutions</div>
        </div>
        <div className="flex flex-col space-y-12">
          <span className="font-semibold text-5xl text-primary-text-color">
            Hello,
          </span>
          <span className="text-primary-text-color font-bold text-7xl ">
            I'm <span className=" text-transparent  bg-clip-text bg-gradient-to-r from-primary-color to-secondary-color">Simon</span> 
          </span>{" "}
        </div>

        <p className="text-left">
          Since beginning my journey as a freelance designer nearby 7 years ago,
          I 've done remote work for agencies, consulted for startup, and
          collaborated with talented people to create digital products.
        </p>

        <div className="flex flex-start justify-between space-x-12">
          <Button
            label="Lets Talk"
            backGround="bg-primary-color"
            borderRadius="none"
            labelColor="text-white"
            hover=" hover:bg-white hover:ease-in-out hover:duration-300 hover:text-primary-color hover:border-2 hover:border-primary-color"
            handleOnclick={contactMe}
          ></Button>
          <Button
            label="View Resume"
            backGround="bg-white"
            borderRadius="none"
            labelColor="text-primary-color"
            hover=" hover:bg-primary-color hover:ease-in-out hover:duration-300 hover:text-white"
            border="border-2 border-primary-color"
            handleOnclick={viewResume}
          ></Button>
        </div>
      </div>

      <div className="flex md:max-w-5xl justify-end">
        <Image src={heroBanner} height={1500} className="object-contain"></Image>
      </div>
    </div>
  );
};

export default Hero;
