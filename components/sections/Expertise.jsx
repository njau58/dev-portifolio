import Image from "next/image";
import React from "react";
import { expertise } from "../../assets/assets";
import SectionHeading from "../sectionHeading/SectionHeading";
import Skills from "../skills/Skills";

const Expertise = () => {
  return (
    <div className="flex flex-col mt-48  ">
      <div className="flex flex-row space-x-2 mb-24 md:mb-auto  ">
        <div className="text-primary-color text-sm px-8 py-2 border-1 border-primary-color rounded-full bg-[#5258fb] bg-opacity-10">
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
