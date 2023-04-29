import React from "react";

import { aiWeb, webAgency, realEstate, cart } from "../../assets/assets";
import CustomLink from "../links/CustomLink";
import Project from "./Project";
import SectionHeading from "../sectionHeading/SectionHeading";

// interface Props {
//   projectName?: string | any;
//   projectDescription?: string | any;
//   projectImage?: any;
//   projectLink?: any;
//   moreProjectsLink?: any;
//   tech?:any
// }

const projects = [
  {
    projectName: "Web Development Agency ",
    projectLink: "https://softleafapplications.com",
    projectImage: webAgency,
    tech:['Nexjs', 'TalwindCSS', 'Framer Motion', 'ReactJS'],
    projectDescription: `Modern landing page for a web development agency. SEO optimized,responsive with a blog system baked in. `,
  },
  {
    projectName: "Online checkout System ",
    projectLink: "https://apexcart.vercel.app/survey&measuringEquipments",
    projectImage: cart,
    tech:['Nexjs', 'TalwindCSS', 'Redux Toolkit', 'Redux Persist', 'WhatsApp API'],
    projectDescription: `Built with redux-toolkit, redux-persit, nextjs and other modern technologies, the online store lets client for apex surveyors view and place orders for equipments seamelessly. `,
  },

  // {
  //   projectName: "Real Estate Agency ",
  //   projectImage: realEstate,
  //   tech:['Nexjs', 'ReactJS', 'TalwindCSS'],
  //   projectLink: "https://www.254rent.com/",
  //   projectDescription: `One stop shop for houses, apartments for commercial and rental. Saves users upto 90%  time of house hunting `,
  // },
  {
    projectName: "AI-powered Web Application",
    projectImage: aiWeb,
    tech:['Nexjs','ChatGpt', 'TalwindCSS'],
    projectLink: "https://ai-items-description-generator.vercel.app/",
    projectDescription: `Running out of catchy description while posting your items for sale online? Not to worry. This AI powered tool comes in handy`,
  },
];

const moreProjectsLink = [
  {
    moreProjectsLink: "https://github.com/njau58",
  },
];
console.log(moreProjectsLink[0].moreProjectsLink);

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col mt-48   space-y-8">
<div className="flex items-center justify-center  mx-auto  ">
        <div className="text-primary-color text-sm font-bold">
     Projects
        </div>
      
      </div>
      
      <SectionHeading label="Take a Look at My Work" />

      <div className=" mt-0 flex flex-col space-y-24 mx-auto">
        {" "}
        {projects?.map((item, idx) => {
          return (
            <Project
              key={item.projectName}
              projectName={item.projectName}
          
              projectDescription={item.projectDescription}
              projectImage={item.projectImage}
              tech={item.tech}
              projectLink={item.projectLink}
            />
          );
        })}
      </div>

     <div className="mx-auto"> <CustomLink
        href={moreProjectsLink[0].moreProjectsLink}
        linkStyles="border-2 border-primary-color bg-primary-color text-white py-2 px-4 text-base font-normal  hover:bg-white hover:ease-in-out hover:duration-300 hover:text-primary-color hover:border-2 hover:border-primary-color"
        label="View More"
      ></CustomLink></div>
    </div>
  );
};

export default Projects;
