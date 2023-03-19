import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export interface Props {
  projectTitle?: string;
  projectExcerpt?: string;
  projectUrl: string;
  cardStyles: string;
  titleStyles: string;
  buttonText: string;
  excerptTitleStyle: string;
}

const projects: Props[] = [
  {
    cardStyles:
      "  border-[1px]  border-white rounded-xl py-8 px-8 items-start space-y-4",
    titleStyles: "font-bold text-white text-xl",
    buttonText: "Open App",
    excerptTitleStyle: "text-slate-200",
    projectTitle: `Find Hotels around you`,
    projectExcerpt: `See hotels/restaurants around you, wherever you are on the globe...
   `,
    projectUrl: "https://tour-guided.vercel.app/",
  },

  {
    cardStyles: "  bg-white rounded-xl py-8 px-8 items-start space-y-4",
    titleStyles: "font-bold text-text-primary-color text-xl",
    buttonText: "View more",
    excerptTitleStyle: "text-slate-400",
    projectTitle: `Open-Source Projects`,
    projectExcerpt: `See documented projects on github version control system...
   `,
    projectUrl: "https://github.com/njau58",
  },
];

const OpenSourceProjects = () => {
  return (
    <div className="mt-48 w-full bg-primary-color py-16">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-12 md:space-y-0 py-12 mx-4">
        {projects?.map((item, idx) => {
          return (
            <div className={`${item.cardStyles}`}>
              <div className={`${item.titleStyles}`}>{item.projectTitle}</div>
              <div className={`${item.excerptTitleStyle}`}>
                {item.projectExcerpt}
              </div>
              <Link href={item.projectUrl} className="cursor-pointer "><a target='_blank'><div className="text-secondary-color flex items-center pt-6 ">{item.buttonText}<span className=" pl-2 inline-block"><BsArrowRight /></span></div></a></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OpenSourceProjects;
