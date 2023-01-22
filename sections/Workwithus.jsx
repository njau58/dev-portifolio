import React from 'react'
import SubHeading from '../components/subheading/SubHeading'
import { GiTechnoHeart } from "react-icons/gi";
import { GiCutDiamond } from "react-icons/gi";
import { IoMdChatbubbles } from "react-icons/io";


const Workwithus = () => {

    const workWithUs = [
        {
          Icon: <GiTechnoHeart />,
          title: "Technology Leadership",
          whyIconWrapper:
            "bg-orange-100 mb-auto rounded-3xl p-5  hover:animate-pulse",
          whyIconStyle: "text-orange-600 text-3xl   ",
          description: `
        SoftLeaf Applications stays on top of new advances in various technology fields, so you can be assured that our software development 
        technologies and technique choices are at the height of current knowledge and are rooted in hands-on experience.`,
        },
        {
          Icon: <IoMdChatbubbles />,
          title: "Communication",
          whyIconWrapper:
            "bg-blue-100 mb-auto rounded-3xl p-5  hover:animate-pulse",
          whyIconStyle: "text-blue-600 text-3xl   ",
          description: `
        At Softleaf we take delight in providing excellent customer service. We guarantee we won't oversell, and we don't promise anything we can't follow up on.
         We are honest and completely accountable with our clients, always striving to provide services that best meet your needs.
       `,
        },
        {
          Icon: <GiCutDiamond />,
          whyIconWrapper:
            "bg-pink-100 mb-auto rounded-3xl p-5  hover:animate-pulse ",
          whyIconStyle: "text-pink-600 text-3xl   ",
          title: "Value",
          description: `Value is one thing our clients are guarnteed, from a simple to a complex website, we are sure to give you value for money.
       We provide business solutions to our clients that add value to their day to day operations. You can never go wrong with us.  
       
       `,
        },
      ];

  return (
    <section className="bg-slate-50 py-2">
    <div className="mt-12">
      <div className="flex flex-col text-center items-center ">
      
      <SubHeading title="Go beyond ultimate services"/>
        <div className=" text-4xl md:text-3xl mx-2 font-bold text-slate-600 my-4">
          Why Choose Us
        </div>
     
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-center my-16 px-6  space-y-12 md:space-y-0  md:space-x-12 ">
        {workWithUs.map((why, idx) => {
          return (
            <div
              key={idx}
              className=" flex flex-row justify-center items-center space-x-4 max-h-lg max-w-lg"
            >
              <div className={why.whyIconWrapper}>
                <div className={why.whyIconStyle}>{why.Icon}</div>
              </div>

              <div className=" flex-col justify-start space-y-4   ">
                <div className="text-slate-900  font-bold text-xl ">
                  {why.title}
                </div>
                <p className="text-slate-500 text-sm md:text-base  leading-7 ">
                  {why.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  )
}

export default Workwithus