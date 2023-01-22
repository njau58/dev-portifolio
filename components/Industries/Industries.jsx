import React from "react";
import { BsApple, BsCartFill } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { BiRestaurant, BiBus } from "react-icons/bi";
import { FaCodeBranch, FaUserGraduate } from "react-icons/fa";
import {
  MdOutlineWeb,
  MdOutlineDeveloperMode,
  MdLabelImportant,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { RiHeartPulseFill } from "react-icons/ri";
import { HiTicket } from "react-icons/hi";

const Industries = ({sectionBg, industryBg, descColor}) => {




  const indusrtySpecifications = [
    {
      icon: <MdOutlineRealEstateAgent />,
      title: "Real Estate",
      description: `We provide end-to-end applications for the service marketplace by understanding the changing trends of consumer satisfaction. 
          We keep a close eye on the market and never fail to satisfy the clients.`,
    },
    {
      icon: <RiHeartPulseFill />,
      title: "Health Care",
      description: `Technology is a core part of the healthcare industry. 
      We offer development solutions and integration with the medical domain. This can open new doors for opportunities and improve the quality of service.`,
    },
    {
      icon: <FaUserGraduate />,
      title: "Education",
      description: `We have done great work in the education development industry. With the help of optimum quality applications,
           we are providing efficient applications for students and teachers.`,
    },
    {
      icon: <HiTicket />,
      title: "Event & Tickets",
      description: `In this era of technology, every individual does even the most basic things online. Thus, for every organization, event and ticket booking has become a must. 
          We provide seamless services regarding bookings so that transactions at both ends can become hassle-free.`,
    },
    {
      icon: <BiRestaurant />,
      title: "Restaurant",
      description: `Food & Resturants
          Food and restaurant services need to be eye-catching. 
          We keep up with the changing world to develop amazing web and mobile application solutions that are user-friendly and modern.`,
    },
    {
      icon: <BiBus />,
      title: "Tours & Travel",
      description: `Our travel and tour applications are filled with aesthetic visuals, eye-catching icons, and innovative ideas to provide out-of-the-block solutions.`,
    },
  ];

  return (
    <div>
      <section className={`${sectionBg}`.concat(" ", " flex flex-col  items-center justify-center ")}>
        <h2 className=" text-3xl text-center font-bold p-6 text-white">
        Industries We Serve
        </h2>

        <div className=" grid grid-cols-1 pb-32 md:mx-24 md:grid-col md:grid-cols-3 gap-2 mx-2">
          {indusrtySpecifications.map((industry, idx) => {
            return (
              <div
                key={idx}
                className={`${industryBg}`.concat(" pl-6 flex items-start space-y-6 justify-start text-left rounded-sm  w-full h-full flex-col")}
              >
                <div className="text-white  text-5xl mt-6">
                  {industry.icon}
                </div>
                <div className="flex flex-col space-y-3">
                  <h1 className="text-slate-50 font-bold text-xl">
                    {industry.title}
                  </h1>
                  <p className={`${descColor}`.concat(" pb-6 mx-4 text-sm md:text-base")}>
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Industries;
