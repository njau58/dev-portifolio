import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Mobile_Hero } from "../components/Home/assets";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";

import { FaCodeBranch } from "react-icons/fa";
import { MdOutlineDeveloperMode, MdLabelImportant } from "react-icons/md";

import { motion } from "framer-motion";
import Industries from "../components/Industries/Industries";
import GrowTogether from "../components/GrowTogether/GrowTogether";
import { useDispatch } from "react-redux";
import { toggleContactModal } from "../redux/features/toggleSlice";
import Header from "../components/Header/Header";
import { GiEarthAfricaEurope } from "react-icons/gi";
import Zoom from 'react-reveal/Zoom';
import Head from "next/head";
import Footer from '../components/Footer/Footer'
import Button from "../components/Button/Button";




const Mobile = () => {
  const dispatch = useDispatch();

  const contactModalToggle = () => {
    dispatch(toggleContactModal());
  };

  const [colorNavChange, setColorNavchange] = useState(true);
  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 80) {
  //     setColorNavchange(true);
  //   } else {
  //     setColorNavchange(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", changeNavbarColor);
  // }, []);

  return (
    // hero
    <>

    <Head>
    <title>Mobile Application Devolopment company in Kenya</title>
        <meta
          name="description"
          content="Softleaf Applications is the best mobile app design and development company in Kenya. We build for individuals and enterprises.
         "
        ></meta>
    </Head>
      <Header
        colorNavChange={colorNavChange}
        navBgColor={`${colorNavChange ? "bg-white" : "bg-transparent"}`}
        linkActiveColor={`${
          colorNavChange ? "text-sky-800" : "text-theme-primary"
        }`}
        linkHoverColor={`${colorNavChange ? "text-theme-primary" : "text-white"}`}
        linkBaseColor={`${
          colorNavChange ? "text-slate-600" : "text-slate-300"
        }`}
        logoColor={`${colorNavChange ? "text-slate-600" : "text-slate-50"}`}
        navBorderBottom={`${colorNavChange ? "border-b-[1px]" : "border-b-0"}`}
        menuIconColor={`${
          colorNavChange ? "text-slate-600" : "text-slate-50"
        }`}
        logoAfterColor="text-slate-100"
      ></Header>
      <main>
      <section className=" relative md:-mt-44 -mt-[40rem]  bg-fixed bg-hero-image   bg-cover bg-no-repeat ">
        <div className=" relative z-20 flex items-center justify-center md:pt-[25rem] pt-[50rem]">
          <h1 className=" mt-[5rem] md:mt-[10rem] md:text-6xl text-slate-100 text-center font-semibold md:mb-72 mb-52 text-5xl mx-2 ">
            Mobile Application Development
          </h1>
        </div>

        <div className=" absolute bg-theme-dark-blue opacity-80 inset-y-0 z-10 w-full h-full"></div>
      </section>

      <div className="relative z-10  md:w-[90%] -mt-24 p-16 bg-white shadow-lg md:mx-auto rounded-t-2xl">
        <div className="flex flex-col  md:flex-row space-y-12 md:space-y-auto">
          <div className="flex flex-col mx-auto space-y-4 ">
            <div className=" text-2xl text-center  font-semibold text-slate-600">
              Vast Mobile App Development Services We Offer
            </div>
            <div className="flex flex-row justify-center items-center space-x-2">
              <div className="p-2 bg-theme-primary rounded-full"></div>
              <div className="p-2 bg-indigo-500 rounded-full"></div>
              <div className="p-2 bg-indigo-400 rounded-full"></div>
              <div className="p-2 bg-indigo-300 rounded-full"></div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex flex-col  md:flex-row  md:space-x-9 space-y-6 md:space-y-0">
              <div className="flex flex-col items-center">
                <div className="text-5xl text-theme-primary">
                  <BsApple></BsApple>
                </div>
                <div className="font-semibold text-xl text-slate-700">
                  iOS App
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl text-theme-primary">
                  <DiAndroid></DiAndroid>
                </div>
                <div className="font-semibold text-xl text-slate-700">
                  Android App
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl text-theme-primary">
                  <GiEarthAfricaEurope></GiEarthAfricaEurope>
                </div>
                <div className="font-semibold text-xl text-slate-700">
                  PWA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" bg-mobile-development-dot bg-repeat py-24">
        <div className="flex flex-col mx-auto  md:flex-row md:pt-16 md:mx-12   ">
          <div className="flex flex-col mt-12  space-y-6 md:w-2/3  mx-2 md:mx-auto ">
            <h1 className="   text-3xl font-light text-slate-800 text-center  md:text-left ">
              <span className="font-bold text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                SoftLeaf {" "}
              </span>{" "}
              Mobile Application Development
            </h1>
            <p className=" text-center text-slate-600  md:text-left leading-8  ">
              Being the top mobile app development company, we work with the
              finest resources, tried & tested methods, out-of-the-box ideas,
              and maintain top-class development quality. With this, we deliver
              the best mobile app development services. SoftLeaf's plan and work
              process for bringing clients’ mobile app ideas to reality is based
              on user needs and value generation. This combined with our amazing
              mobile app development services allows us to deliver business
              value and desire results. From Idea Incubation, Validation,
              Prototyping and Product Strategy on Mobile UI-UX Design, our teams
              put utmost expertise to ensure the delivery of the product.
            </p>
            <p className=" mt-8 font-bold text-3xl text-center  md:mt-6 text-slate-600  md:text-left  ">
              Lets Start A New Project Together
            </p>
            <div className="flex justify-center md:justify-start">
          

              <Button onClick={contactModalToggle} label="Lets Talk" extra=" mb-24  p-3 px-8  p-3 px-8  "></Button>
            </div>
          </div>
          <div className="relative z-20 md:max-w-6xl ">
          <Zoom>  <Image src={Mobile_Hero} alt="" /> </Zoom>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-3 grid-rows-1 md:space-x-4 mx-2 py-24 space-y-12 md:space-y-0">
        <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }}>
          <div className=" relative flex items-center justify-center mx-auto py-12 rounded-lg bg-mobile-bg bg-center bg-no-repeat">
            <div className="flex flex-col space-y-2 z-20 justify-center items-center">
              <div className="text-7xl text-white">
                <MdOutlineDeveloperMode></MdOutlineDeveloperMode>
              </div>
              <h2 className="text-slate-50 font-semibold text-xl">
                Full Customization
              </h2>
            </div>
            <div className=" absolute bg-black opacity-60 inset-y-0 z-10 w-full h-full rounded-lg"></div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }}>
          <div className=" relative flex items-center justify-center py-12 mx-auto  rounded-lg bg-mobile-bg1 bg-center bg-no-repeat">
            <div className="flex flex-col space-y-2 z-20 justify-center items-center">
              <div className="text-7xl text-white">
                <MdLabelImportant></MdLabelImportant>
              </div>
              <h2 className="text-slate-50 font-semibold text-xl">
                Complete Documentation
              </h2>
            </div>
            <div className=" absolute bg-black opacity-60 inset-y-0 z-10 w-full h-full rounded-lg"></div>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }}>
          <div className=" relative flex items-center justify-center py-12 mx-auto  rounded-lg bg-mobile-bg2 bg-center bg-no-repeat">
            <div className="flex flex-col space-y-2 z-20 justify-center items-center">
              <div className="text-7xl text-white">
                <FaCodeBranch></FaCodeBranch>
              </div>
              <h2 className="text-slate-50 font-semibold text-xl">
                Complete Source Code
              </h2>
            </div>
            <div className=" absolute bg-black opacity-60 inset-y-0 z-10 w-full h-full rounded-lg text-[#193569]"></div>
          </div>
        </motion.div>
      </section>
      <Industries
        sectionBg="bg-[#0c2045]"
        industryBg="bg-[#193569]"
        descColor="text-slate-50"
      />
      <div className="mt-16">
        {" "}
        <GrowTogether />
      </div>
      </main>
      <Footer show={true}></Footer>
    </>
  );
};

export default Mobile;
