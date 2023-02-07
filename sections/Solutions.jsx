import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import Solution from "../components/Solution/Solution";
import SubHeading from "../components/subheading/SubHeading";

const Solutions = () => {
  const solutions = [
    {
      Icon: <AiOutlineMobile />,
      cardBg: "bg-zinc-50",
      borderColor:"bg-pink-100  ",
      iconWrapperStyle:
        "bg-pink-100  rounded-xl p-7   hover:animate-pulse rotate-45 ",
      iconStyle: "text-pink-600 text-3xl absolute",
      href: "/mobile-development-company-kenya",
      title: "Mobile Development",
      description: `Technology is now on-the-go, especially your mobile devices. Going mobile is the number 1 choice to streamline your business operations and tackle the most viral communication market.
       Develop your mobile applications now using comprehensive mobile application services with us.`,
    },

    {
      Icon: <MdDesignServices />,
      cardBg: "bg-slate-50",
      borderColor:"bg-green-100  ",
      href: "/ui-ux-design-company-kenya",
      iconWrapperStyle:
        "bg-green-100  rounded-xl p-7   hover:animate-pulse rotate-45 ",
      iconStyle: "text-green-600 text-3xl absolute",
      title: "UI/UX Design",
      description: `We are experienced creative UI/UX design agency developing innovatively designed online solutions. We craft amazing and responsive user experience designs that meet our client’s business goals and vision.Creating innovative and most appealing user experiences that grabs user attention is our core business.`,
    },
    {
      Icon: <BiCodeAlt />,
      borderColor:"bg-blue-100  ",
      href: "/web-development-company-kenya",
      title: "Web Development",
      cardBg: "bg-stone-50",
      iconWrapperStyle:
        "bg-blue-100  rounded-xl p-7  hover:animate-pulse rotate-45",
      iconStyle: "text-blue-600 text-3xl absolute",
      description: `Promote your business on the right platform.
      We give an amazing shaping to your dream business with our ultimate website development services.
       Our team will deliver fast, reliable, secure and scalable application within your budget and the given deadline.`,
    },
  ];

  return (
    <section className=" my-12  ">
          <div className="flex flex-col pt-24">
            <div className="flex flex-col text-center items-center space-y-3 mb-12">
          <SubHeading title="Ideal solutions for you"/>
              <div className=" text-3xl font-bold text-slate-600 md:text-4xl">
                Our Solutions
              </div>
             
            </div>
            <div className="flex md:flex-row md:mx-auto  md:px-12 md:space-x-12 flex-col  mx-2 space-y-12 md:space-y-0">
              {solutions?.map((solution, idx) => {
                return (
               
              <Solution
                    key={idx}
                    Icon={solution.Icon}
                    description={solution.description}
                    title={solution.title}
                    iconStyle={solution.iconStyle}
                    iconWrapperStyle={solution.iconWrapperStyle}
                    href={solution.href}
                    cardBg={solution.cardBg}
                    borderColor={solution.borderColor}
                  />
                     
                );
              })}
            </div>
          </div>
        </section>
  );
};

export default Solutions;





