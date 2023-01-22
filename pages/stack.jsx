import React,{useState} from "react";
import Header from  '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import GroTogether from "../components/GrowTogether/GrowTogether";
import {
  react_icon,
  next_icon,
  tailwind_icon,
  javascript_icon,
  native_icon,
  android_icon,
  mongo_icon,
  ocean_icon,
  node_icon,
  redux_icon,
  css_icon,
  html_icon,
  firebase_icon,
} from "../components/Home/assets";
import Image from 'next/image'
import Head from "next/head";

const Stack = () => {
  const stack = [
    {
      icon:<Image src={javascript_icon} alt="javascript" />,
      title: "JavaScript",
    },
    {
      icon: <Image src={react_icon} alt="react" /> ,
      title: "React",
    },
 
    {
      icon: <Image src={android_icon} alt="android" />,
      title: "Android",
    },
    {
      icon:<Image src={mongo_icon} alt="mongodb"/>,
      title: "MongoDB",
    },
    {
      icon:  <Image src={native_icon} alt="reactnative"/>,
      title: "React Native",
    },
    {
      icon: <Image src={redux_icon} alt="redux"/>,
      title: "Redux",
    },
    {
      icon:  <Image src={firebase_icon} alt="firebase" />,
      title: "Firebase",
    },
    {
      icon:  <Image src={tailwind_icon} alt="tailwind" />,
      title: "TailWind",
    },
    {
      icon:  <Image src={next_icon} alt="next" />,
      title: "NextJS",
    },
    {
      icon:  <Image src={node_icon}  alt="node"/>,
      title: "NodeJs",
    },
    {
      icon: <Image src={css_icon} alt="css" />,
      title: "CSS",
    },
    {
      icon:<Image src={html_icon}  alt="html"/>,
      title: "HTML",
    },
  ];

  const [colorNavChange, setColorNavchange] = useState(true);
 
  return (


    <>

<Head>
        <title>Web Development Technologies in Kenya</title>
        <meta
          name="description"
          content="Softleaf Applications is the best web & mobile development company in Kenya.
         "
        ></meta>
      </Head>
         <Header
         colorNavChange={true}
        navBgColor={`${colorNavChange ? "bg-white" : ""}`}
        linkActiveColor={`${
          colorNavChange ? "text-sky-800" : "text-theme-primary"
        }`}
        linkHoverColor={`${colorNavChange ? "text-theme-primary" : "text-slate-400"}`}
        linkBaseColor={`${
          colorNavChange ? "text-slate-600" : "text-slate-900"
        }`}
        logoColor={`${colorNavChange ? "text-slate-600" : "text-slate-700"}`}
        navBorderBottom={`${colorNavChange ? "border-b-[1px]" : "border-b-0"}`}
        menuIconColor={`${
          colorNavChange ? "text-slate-600" : "text-slate-600"
        }`}
        logoAfterColor="text-slate-100"
      ></Header>
      <section className=" bg-slate-50   items-center pb-24 flex flex-col md:flex-row -mt-32 pt-[22rem] md:justify-center md:space-x-20 ">
        <div className="flex flex-col md:max-w-sm">
          <h1 className="   text-4xl px-[2%] md:px-0  text-theme-primary font-bold text-center md:text-5xl md:text-left">
            Our Tech Stack
          </h1>
          <p className="mx-3 text-center leading-8 mt-6 md:mx-0  text-slate-600 ">
            Our software developers are proficient with the latest cutting-edge
            technologies, whether front-end or back-end. Based on your
            requirements, we make the best choice for you. We follow agile methodology to enhance your brand reputation as we craft scalable and robust software solutions to accelerate your business.
          </p>
        </div>

        <div className=" grid grid-cols-4 gap-x-6 gap-y-9  md:gap-x-4 md:gap-y-6 pt-9  mx-4 ">
          {stack?.map((stck, idx) => {
            return (
              <div key={idx} className="flex flex-col">
                <div className=" md:h-12 md:w-12 h-9 w-9 mix-blend-multiply">{stck.icon}</div>
                <div className="text-slate-500 text-sm  mt-2">{stck.title}</div>
              </div>
            );
          })}
        </div>
      </section>

      <GroTogether />
      <Footer show={true}></Footer>
    </>
  );
};

export default Stack;
