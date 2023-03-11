import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { TbSeo } from "react-icons/tb";

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
    <div className="max-w-7xl mx-auto">
      <div className="flex mt-24 flex-row space-x-2 mb-12 ">
        <div className="text-primary-color text-sm px-8 py-2 border-1 border-primary-color rounded-full bg-[#5258fb] bg-opacity-10">
          My Advantage
        </div>
      </div>
      <div className="flex items-center justify-center bg-white md:rounded-lg md:shadow-2xl md:py-6 max-w-5xl mx-auto md:px-6">
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
