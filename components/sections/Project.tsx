import React from "react";
import Image from "next/image";
import Button from "../button/Button";
import CustomLink from "../links/CustomLink";
import { LinkProps } from "next/link";

interface Props {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectLink:LinkProps
  
}

const Project = ({ projectDescription, projectName, projectImage,projectLink }: Props) => {
  return ( <> 
    <div className="flex flex-col md:flex-row space-y-16  mx-auto md:space-x-24 max-w-7xl">
      <div className="flex  justify-end md:max-w-lg ">
        <Image
          src={projectImage}
          height={1000}
          className="object-contain"
        ></Image>
      </div>
      <div className=" flex flex-col space-y-4  justify-center ">
        <div className="flex flex-row  space-x-2">
          <span className="border-b-2 h-3 w-3  border-primary-color"></span>

          <div className="text-primary-color text-sm">{projectName}</div>
        </div>
        <div className=" md:max-w-lg text-secondary-text-color">
         {projectDescription}
        </div>

   <div className="flex justify-start ">
 <CustomLink href={projectLink} linkStyles=' border-2 border-primary-color bg-white text-primary-color py-2 px-4 text-base font-normal hover:bg-primary-color hover:ease-in-out hover:duration-300 hover:text-white hover:border-2 hover:border-primary-color' label='Visit website' />
   </div>
      </div>
    
    </div>
    <hr className="  w-full "></hr></>
  );
};

export default Project;
