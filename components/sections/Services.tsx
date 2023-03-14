import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { TbSeo } from "react-icons/tb";
import SectionHeading from "../sectionHeading/SectionHeading";

interface Props {
  service: string;
  description: string;
  icon: JSX.Element;
}

const services: Props[] = [
  {
    service: "Web Development",
    description:
      "The technological revolution is changing aspect The technological revolution is changing aspect",
    icon: <FaLaptopCode />,
  },
  {
    service: "UI/UX Design",
    description:
      "The technological revolution is changing aspect The technological revolution is changing aspect",
    icon: <FiFigma />,
  },
  {
    service: "SEO",
    description:
      "The technological revolution is changing aspect The technological revolution is changing aspect",
    icon: <TbSeo />,
  },
];

const Services = () => {
  return (
    <div className="max-w- mx-auto mt-48 ">
      <div className="flex items-center justify-center  mx-auto mb-8 ">
        <div className="text-primary-color text-sm font-bold">
      What I Offer
        </div>
      
      </div>
      <SectionHeading label="Services" />
      <div className="flex items-center justify-center bg-white md:rounded-lg md:shadow-lg md:border-[1px]  py-16 max-w-5xl mx-auto md:px-6 mt-12">
        <div className="flex flex-col space-y-12 md:space-y-0 md:space-x-12 md:flex-row">
          {services.map((item, index) => {
            return (
              <div className="bg-white  md:shadow-none md:px-2 py-4 rounded-lg flex flex-col items-center justify-center space-y-4 md:rounded-none">
                <div className=" border-gray-100 rounded-full p-4 border-8">
                  <div className=" bg-gray-100 rounded-full p-4">
                    <div className="text-4xl text-primary-color">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <div className="font-bold text-xl">{item.service}</div>
                <div className="md:max-w-xs text-center text-secondary-text-color">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
