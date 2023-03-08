import React from "react";
import Image from "next/image";
import Button from "../button/Button";

interface Props {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectLink:string
  
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
   <Button
          label="View Resume"
          backGround="bg-white"
          borderRadius="none"
          labelColor="text-primary-color"
          hover=" hover:bg-primary-color hover:ease-in-out hover:duration-300 hover:text-white"
          border="border-2 border-primary-color"
        ></Button>
   </div>
      </div>
    
    </div>
    <hr className="  w-full "></hr></>
  );
};

export default Project;
