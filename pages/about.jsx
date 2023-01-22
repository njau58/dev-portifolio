import React, { useEffect, useState } from "react";
import { SiJavascript } from "react-icons/si";
import CountUp from "react-countup";
import { About_svg } from "../assets/assets";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { GiProcessor } from "react-icons/gi";
import GrowTogether from "../components/GrowTogether/GrowTogether";
import Header from "../components/Header/Header";
import { BsArrowRight, BsGearWideConnected } from "react-icons/bs";
import Head from "next/head";
import Footer from "../components/Footer/Footer";

const About = () => {
  const [colorNavChange, setColorNavchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorNavchange(true);
    } else {
      setColorNavchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <>

<Head>
<title>Website Design and Mobile Development company in Kenya</title>
        <meta
          name="description"
          content="Softleaf Applications is the best web & mobile development company in Kenya.
         "
        ></meta>
      </Head>
      <Header 
      colorNavChange={true}
        navBgColor={`${colorNavChange ? "bg-white" : "bg-transparent"}`}
        linkActiveColor={`${
          colorNavChange ? "text-sky-800" : "text-theme-primary"
        }`}
        linkHoverColor={`${colorNavChange ? "text-theme-primary" : "text-white"}`}
        linkBaseColor={`${
          colorNavChange ? "text-slate-600" : "text-slate-900"
        }`}
        logoColor={`${colorNavChange ? "text-slate-600" : "text-slate-700"}`}
        navBorderBottom={`${colorNavChange ? "border-b-[1px]" : "border-b-0"}`}
        menuIconColor={`${colorNavChange ? "text-slate-600" : "text-slate-600"}`}
        logoAfterColor="text-slate-100"
      ></Header>
      <section className=" relative   bg-fixed bg-about-img bg-cover bg-center pb-32 bg-no-repeat">
        <div className=" relative z-20 flex flex-col pt-72  ml-6  justify-start md:ml-24  ">
          <div className="text-5xl text-theme-dark-blue  ">About Us</div>

          <div
            className="border-b-[3px]
              border-b-slate-700  w-[10%] md:w-[4%] my-6 "
          ></div>
          <p class=" text-slate-700 leading-8 text-left md:w-[50%]  ">
            SofLeaf Applications is a leading software development company
            providing custom software solutions, web design & development,
            mobile apps, etc. We are the only web Solutions company in Kenya who
            provide fresh, creative digital and out-of-the-box solutions to
            businesess and individuals interested in growing their
            businesses/presence online.
          </p>
        </div>
      </section>

      <section className=" bg-vect4 bg-center py-12  bg-no-repeat ">
        <div className=" pt-12  flex flex-col items-center pb-9 md:flex-row ">
          <div className="flex flex-col items-center md:w-2/3 ">
            <div className="flex flex-col space-y-3 ">
              <div className=" text-3xl md:text-4xl font-light text-slate-600">
                {" "}
              Our Little Story
              </div>

  
            </div>
            <p class="md:mx-24 mx-4 text-center text-slate-600   mt-9 mb-12 leading-8   ">
              Softleaf started its amazing journey in 2019 with a small team as
              an enterprise software development company. Since then, we have
              been offering end-to-end digital solutions across all business
              verticals worldwide. We have a great reputation of providing
              unique and customized business solutions tailored to meet the
              specific business needs. We have extended our remarkable services
              to more than 100 projects for start-ups, small, and Enterprise
              businesses globally.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl p-9 rounded-lg">
            <SiJavascript className="text-theme-primary text-3xl" />
            <h2 className="font-semibold text-2xl">
              <CountUp end={100} duration={5} />+
            </h2>
            <p className="text-slate-600"> Web applications completed.</p>
          </div>
        </div>
      </section>

      <section className=" bg-slate-100 py-12">
        <div className="flex flex-col justify-between items-center md:flex-row ">
          <div className="flex flex-col md:ml-16">
            <div className=" mt-12 ml-3 md:max-w-3xl text-4xl font-light  text-theme-primary  md:text-5xl md:text-left">
              We use proven methods to deliver amazing results
            </div>
            <p className=" mt-8 max-w-lg mx-3 md:my-6 text-slate-600 md:text-left text-sm leading-8">
              Programming of custom web applications has been at the core of
              Softleaf's technical expertise.Agile web development process
              ensures that our clients get robust tailor-made solutions for
              their businesses.
            </p>
            <div className="flex flex-col ml-12 mt-4">
              <div className="flex justify-start pb-6 flex-col space-y-2 ">
                <div className="flex items-center">
                  {" "}
                  <TiTick className="text-white  bg-theme-primary  rounded-full " />
                  <p className="text-sm text-slate-500 ml-2 ">We do research</p>
                </div>
                <div className="flex items-center">
                  {" "}
                  <TiTick className="text-white   bg-theme-primary   rounded-full " />
                  <p className="text-sm text-slate-500 ml-2 ">
                    We plan and strategize
                  </p>
                </div>
                <div className="flex items-center">
                  {" "}
                  <TiTick className="text-white   bg-theme-primary  rounded-full " />
                  <p className="text-sm text-slate-500 ml-2 ">
                    We design and develop
                  </p>
                </div>
                <div className="flex items-center">
                  {" "}
                  <TiTick className="text-white   bg-theme-primary   rounded-full " />
                  <p className="text-sm text-slate-500 ml-2 ">
                    We test and deploy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:flex">
            <Image src={About_svg} alt=""></Image>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-12 flex justify-center items-center  flex-col md:flex-row space-y-12 md:space-x-32 md:space-y-0 ">
          <div className="  flex flex-col items-center justify-center space-y-3    ">
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r via-pink-400 from-pink-600 to-purple-700   rounded-full p-6 "></div>
              <div className="text-white text-3xl absolute">
                {" "}
                <BsGearWideConnected></BsGearWideConnected>
              </div>
            </div>

            <h2 className="font-extrabold text-2xl text-slate-700">
              What we do
            </h2>
            <p className="text-slate-500 text-center text-sm leading-8">
              {" "}
              We help businesses create full-fledged enterprise software
              solutions that help them achieve their business goals.
            </p>
            <a
              href="/"
              className="px-16 flex items-center my-3  text-sky-500  text-sm font-extrabold cursor-pointer "
            >
              checkout our services{" "}
              <span className="text-sky-800 text-sm mr-2 ">
                {" "}
                <BsArrowRight></BsArrowRight>
              </span>{" "}
            </a>
          </div>
          <div className="  flex flex-col items-center justify-center space-y-3    ">
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r via-pink-400 from-pink-600 to-purple-700   rounded-full p-6 "></div>
              <div className="text-white text-3xl absolute">
                {" "}
                <GiProcessor></GiProcessor>
              </div>
            </div>

            <h2 className="font-extrabold text-2xl text-slate-700">
              How we do it
            </h2>
            <p className="text-slate-500 text-center text-sm leading-8">
              {" "}
              We use modern, proven, and advanced technologies and strategic
              approaches to deliver scalable products and robust software
              solutions.
            </p>
            <a
              href="/stack"
              className="px-16 flex items-center my-3  text-sky-500  text-sm font-extrabold cursor-pointer "
            >
              checkout out our tech stack{" "}
              <span className="text-sky-800 text-sm mr-2 ">
                {" "}
                <BsArrowRight></BsArrowRight>
              </span>{" "}
            </a>
          </div>
        </div>
      </section>

      <div className="mt-12">
        <GrowTogether />
      </div>
      <Footer show={true}></Footer>
    </>
  );
};

export default About;
