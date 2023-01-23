import React, { useEffect, useState } from "react";
import {
  mobile_ux1,
  usability_testing,
  user_research,
  interaction_design,
  ui_ux,
  react_icon,
  next_icon,
  bootstrap_icon,
  tailwind_icon,
} from "../assets/assets";
import Image from "next/image";
import Header from "../components/Header/Header";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { GiEarthAfricaEurope } from "react-icons/gi";
import GrowTogether from "../components/GrowTogether/GrowTogether";
import { useDispatch } from "react-redux";
import { toggleContactModal } from "../redux/features/toggleSlice";
import Zoom from "react-reveal/Zoom";
import Head from "next/head";
import Footer from '../components/Footer/Footer'
import Button from "../components/Button/Button";

const WebDesign = () => {
  const dispatch = useDispatch();

  const contactModalToggle = () => {
    dispatch(toggleContactModal());
  };

  const [colorNavChange, setColorNavchange] = useState(true);
  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 100) {
  //     setColorNavchange(true);
  //   } else {
  //     setColorNavchange(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", changeNavbarColor);
  // }, []);

  return (
    <>
     <Head>
        <title>UI/UX Devolopment company in Kenya</title>
        <meta
          name="description"
          content="Softleaf Applications is the best UI/UX design company in Kenya. We build for individuals and enterprises.
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
          colorNavChange ? "text-slate-600" : "text-slate-300"
        }`}
        logoColor={`${colorNavChange ? "text-slate-600" : "text-slate-50"}`}
        navBorderBottom={`${colorNavChange ? "border-b-[1px]" : "border-b-0"}`}
        menuIconColor={`${colorNavChange ? "text-slate-600" : "text-slate-50"}`}
        logoAfterColor="text-slate-100"
      ></Header>

      <main>

      <section className="    bg-fixed bg-ux-ui-bg   bg-cover bg-no-repeat">
        <div className=" pt-64   ">
          <div className="flex flex-col items-center justify-center mx-4  pb-12 space-y-7   ">
            <h1 className="  text-2xl text-center mx-9 max-w-lg  text-slate-200 ">
              We handcraft attractive and engaging UI/UX designs that are
              exceptional and customer-centric.
            </h1>

            <div className="flex justify-center items-center">
              <div className="flex flex-row space-x-7">
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-4xl text-slate-50">
                    <BsApple></BsApple>
                  </div>
                  <div className="font-normal text-slate-50">iOS</div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-4xl text-slate-50">
                    <DiAndroid></DiAndroid>
                  </div>
                  <div className="font-normal text-slate-50">Android</div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-4xl text-slate-50">
                    <GiEarthAfricaEurope></GiEarthAfricaEurope>{" "}
                  </div>
                  <div className="font-normal text-slate-50">Web</div>
                </div>
              </div>
            </div>
         
            <Button onClick={contactModalToggle} label=" Get free consultation " extra="px-12 py-3 "></Button>
          </div>
        </div>
      </section>

      <section className=" py-9">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0  my-9 mx-auto">
          <div className="flex flex-col space-y-4 items-center justify-center max-w-lg mx-4 md:mx-auto">
            <div className="font-extrabold text-2xl text-slate-800 text-center">
              Improve your brand value by our creative and unique UI/UX design
              solutions
            </div>

            <p className="text-slate-600 md:text-base text-sm leading-7 pb-6 text-center">
              {" "}
              We craft amazing and responsive user experience designs that meet
              our client’s business goals and vision. We create innovative and
              most appealing user experiences that grabs user attention.
            </p>
            {/* <button
              onClick={contactModalToggle}
              className="md:py-3 md:px-6  px-4 py-2  rounded-lg bg-[#711B8A] text-sm  text-white cursor-pointer hover:bg-amber-500 md:mx-6 "
            >
              Get A free UI/UX consultation{" "}
            </button> */}

<Button onClick={contactModalToggle} label="Get A free UI/UX consultation " extra="px-12 py-3 "></Button>
                
          </div>

          <div className=" max-w-lg ">
            {" "}
            <Zoom>
              {" "}
              <Image src={mobile_ux1} alt="ui/ux"></Image>
            </Zoom>
          </div>
        </div>
      </section>

      <div>
      <div className="font-extrabold text-xl text-slate-800 text-center mx-auto" >
          What makes us unique as a UX design agency
        </div>
        <p className=" mt-4 max-w-lg text-slate-600 leading-7 tex-sm md:text-base text-center md:mx-auto mx-4  ">
          We follow a clear design process which makes us standout when it comes
          to UX design. Our design team offers UI/UX design services to help you
          build an interactive and high quality product quickly.
        </p>
      </div>

      {/* USER RESEARCH */}


      <section className="pt-12">
        
        <div className="flex flex-col md:flex-row justify-center mx-6 md:space-x-16 items-center space-y-12 md:space-y-0  my-9">
          <div className="flex flex-col space-y-4 items-start ">
            <div className="font-extrabold text-xl text-slate-800 mx-auto">
              User Research
            </div>

            <p className="text-slate-600 leading-7 text-sm md:text-base pb-6 max-w-lg text-center mx-4 md:mx-auto">
              {" "}
              User research is the foundation for effective and sustainable
              design solutions. We conduct user research by analysing your
              business needs, market trends and customer feedback.
            </p>
           

            <Button onClick={contactModalToggle} label="Get A free UI/UX consultation " extra="px-12 py-3 mx-auto "></Button>
          </div>

          <div className=" max-w-lg flex  ">
            {" "}
            <Zoom>
              {" "}
              <Image src={usability_testing} alt="usability"></Image>
            </Zoom>
          </div>
        </div>
      </section>
      {/*  USER EXPERIENCE DESIGN  USER INTERFACE DESIGN */}
      <section>
        <div className="flex flex-col items-center space-y-4 md:space-y-0  justify-center md:flex-row mx-auto md:space-x-12 px-12 ">
          <div className="flex flex-col space-y-4 items-start   ">
            <div className="font-extrabold text-xl text-slate-800 ">
              User Experience Design
            </div>

            <p className="text-slate-600 leading-7 text-sm md:text-base pb-6 max-w-lg  ">
              {" "}
              We create digital experiences that are clear, purposeful and
              visually enjoyable for the end-users. We use best techniques and
              practices which are suitable for our client’s business goals.
            </p>
          </div>
          <div>
         
             <div className="max-w-lg">  <Image src={ui_ux} alt="ux-design "></Image></div>
          
          </div>
          <div className="flex flex-col space-y-4 items-start   ">
            <div className="font-extrabold text-xl text-slate-800">
              User Interface Design
            </div>

            <p className="text-slate-600 leading-7 text-sm md:text-base max-w-lg">
              {" "}
              We offer user-friendly design services creating the top-notch
              mobile interface experience to the target audience. Our highly
              talented team creates UI/UX designs to engage your customers.
            </p>
          </div>
        </div>
      </section>
      {/* INTERACTION DESIGN */}
      <section className="pt-12">
        <div className="flex flex-col md:flex-row justify-center mx-6 md:space-x-16 items-center space-y-12 md:space-y-0  my-9">
          <div className=" max-w-lg flex  ">
            {" "}
            <Zoom>
              {" "}
              <Image src={interaction_design} alt="interaction"></Image>
            </Zoom>
          </div>

          <div className="flex flex-col space-y-4 items-start mx-auto">
            <div className="font-extrabold text-xl text-slate-800 mx-auto">
              Interaction Design
            </div>

            <p className="text-slate-600 pb-6 leading-7 max-w-lg text-sm md:text-base text-center">
              At the heart of any design project is the target audience.We
              incorporate their requirements to come up with amazing UI/UX
              design patterns to enhance the interaction of end-users with web
              or mobile applications
            </p>
            <Button onClick={contactModalToggle} label="Get A free UI/UX consultation " extra="px-12 py-3 mx-auto "></Button>
          </div>
        </div>
      </section>
      {/* USABILITY TESTING */}
      <section className="pt-12">
        <div className="flex flex-col md:flex-row justify-center mx-6 md:space-x-16 items-center space-y-12 md:space-y-0  my-9">
          <div className="flex flex-col space-y-4 items-start ">
            <div className="font-extrabold text-xl text-slate-800 mx-auto text-center">
              Usability Testing
            </div>

            <p className="text-slate-600 leading-7 text-sm md:text-base max-w-lg md:mx-auto mx-4 text-center ">
              With a thorough understanding of latest technologies and tools, we
              perform various quality tests to make sure that the app we design
              is free from bugs, robust and easy to use with smooth navigation.
            </p>
          

            <Button onClick={contactModalToggle} label="Get A free usability  consultation " extra="px-12 py-3 mx-auto "></Button>
          </div>
          <div className=" max-w-lg flex  ">
            {" "}
            <Zoom>
              <Image src={user_research} alt="usability"></Image>
            </Zoom>
          </div>
        </div>
      </section>
      {/* FROTEND TECH */}
      <section className="py-24">
        <div className="font-extrabold text-2xl text-slate-800 text-center">
          Frontend Development
        </div>
        <p className="text-center mt-4 max-w-lg text-slate-600 leading-7 text-sm md:text-base md:mx-auto mx-4">
          Design and development follow principles that overarch. We actualise
          these designs and aesthetics using modern cutting edge technologies
          while ensuring development of quality products for our clients.
        </p>
        <div className=" flex items-center  justify-center ">
          <div className=" grid grid-cols-4   gap-x-16 md:gap-y-6 pt-9 mx-12 ">
            <div className=" h-12 w-12">
              {" "}
              <Image className="" src={react_icon} alt="react"></Image>{" "}
              <div className="flex items-center justify-center text-slate-500 font-bold">
                React
              </div>
            </div>
            <div className=" h-12 w-12">
              {" "}
              <Image className="" src={next_icon} alt="nextjs"></Image>{" "}
              <div className="flex items-center justify-center text-slate-500 font-bold">
                NextJS
              </div>
            </div>
            <div className=" h-12 w-12">
              {" "}
              <Image className="" src={bootstrap_icon} alt="bootstrap"></Image>{" "}
              <div className="flex items-center justify-center text-slate-500 font-bold">
                Bootstrap
              </div>
            </div>
            <div className=" h-12 w-12">
              {" "}
              <Image className="" src={tailwind_icon} alt="tailwind"></Image>{" "}
              <div className="flex items-center justify-center text-slate-500 font-bold">
                Tailwind
              </div>
            </div>
          </div>
        </div>
      </section>

      <GrowTogether></GrowTogether>
      </main>
<Footer show={true}></Footer>
    </>
  );
};

export default WebDesign;
