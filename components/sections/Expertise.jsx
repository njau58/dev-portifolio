import Image from "next/image";
import React from "react";
import { expertise } from "../../assets/assets";
import Skills from "../skills/Skills";

const Expertise = () => {
  return (
    <div className="flex flex-col mt-48  ">
      <div className="flex flex-col space-y-4">
        <h1 className="text-center mx-auto  font-bold text-2xl text-secondary-text-color ">
          EXPERTISE
        </h1>
        <span className="border-b-4 border-primary-color w-12 mx-auto"></span>
      </div>

      <div className="flex flex-col md:flex-row mt-32 mx-auto space-y-12 space-x-10">
        <Skills />
        <div className="flex  justify-end md:max-w-lg">
        <Image src={expertise} height={1500} className="object-contain"></Image>
      </div>
      </div>
    </div>
  );
};

export default Expertise;
