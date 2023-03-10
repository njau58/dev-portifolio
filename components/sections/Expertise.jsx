import Image from "next/image";
import React from "react";
import { expertise } from "../../assets/assets";
import SectionHeading from "../sectionHeading/SectionHeading";
import Skills from "../skills/Skills";

const Expertise = () => {
  return (
    <div className="flex flex-col mt-48  ">
     <SectionHeading label="The future of creation is expertise "/>

      <div className="flex flex-col md:flex-row mt-32 mx-auto space-y-12 space-x-10">
        <Skills />
        {/* <div className="flex  justify-end md:max-w-lg">
        <Image src={expertise} height={1500} className="object-contain"></Image>
      </div> */}
      </div>
    </div>
  );
};

export default Expertise;
