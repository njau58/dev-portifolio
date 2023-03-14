import Image from "next/image";
import React from "react";
import { expertise } from "../../assets/assets";
import SectionHeading from "../sectionHeading/SectionHeading";
import Skills from "../skills/Skills";

const Expertise = () => {
  return (
    <div className="flex flex-col mt-48  ">
     <div className="flex items-center justify-center  mx-auto mb-8 ">
        <div className="text-primary-color text-sm font-bold">
      Tech Stack
        </div>
      
      </div>
      <SectionHeading label="The future of creation is expertise " />

      <div className="flex flex-col md:flex-row mt-32 mx-auto space-y-12 space-x-10">
        <Skills />
      </div>
    </div>
  );
};

export default Expertise;
