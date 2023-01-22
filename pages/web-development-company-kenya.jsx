import React,{useEffect, useState} from "react";
import { Dashboard2_img, Dashboard_img } from "../assets/assets";
import Image from "next/image";
import Industries from '../components/Industries/Industries'
import Header from "../components/Header/Header";
import GrowTogether from "../components/GrowTogether/GrowTogether";
import Footer from '../components/Footer/Footer'
import { Web } from "../components/Home/assets";
import { TiTick } from "react-icons/ti";
import Zoom from 'react-reveal/Zoom';
import Head from "next/head";


const Development = () => {
  
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
        <title>Website Design and Devolopment company in Kenya</title>
        <meta
          name="description"
          content="Softleaf Applications is the best web app design and development company in Kenya. We build for individuals and enterprises.
         "
        ></meta>
      </Head>

<Header
        navBgColor={`${colorNavChange ? "bg-white" : "bg-transparent"}`}
        colorNavChange={true}
        linkActiveColor={`${
          colorNavChange ? "text-sky-800" : "text-theme-primary"
        }`}
        linkHoverColor={`${colorNavChange ? "text-theme-primary" : "text-white"}`}
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
      <main>
      <section className="bg-vect1 bg-center bg-no-repeat -mt-28 pt-56">
        <div className=" md:pt-24 pt-16 flex flex-col items-center pb-9 ">
          <div className="mb-6  md:text-5xl text-3xl mx-2 md:mx-12 text-slate-900 font-light text-center  ">
            What's Different about Softleaf Applications?
           
          </div>
          <p className=" text-slate-600 mx-6  text-sm leading-8 md:mx-32 md:text-lg  md:text-center   ">
          We give an amazing shaping to your dream business with our ultimate  website development services. Our web development team can build the responsive web applications and websites as per your requirement,
           within your budget and the given deadline, we want you to standout from the rest, just like us.
          </p>

         <Zoom><Image src={Dashboard_img}></Image></Zoom> 
        </div>
      </section>
      <section className="mb-24">
        <div className="flex flex-col md:flex-row md:mx-12">
          <div className=" md:min-w-[50%] md:mt-16 md:h-[70%]  ">
          <Zoom>  <Image src={Web}></Image> </Zoom>
            
          </div>

          <div className="flex flex-col space-y-4 md:mt-12">
          <div className="mb-6  md:text-4xl text-3xl mx-6 md:mx-auto  text-slate-900 font-light   ">
              Customized web applications for all platforms and verticals
            </div>
            <p className=" text-slate-600 mx-6  text-sm leading-8 md:text-base    ">
              We are experts in the world's leading web platforms and serve
              clients in every vertical. Whether for technology startups,
              ecommerce, or small businesses, we have a custom web design
              solution for you. We help companies solve business challenges by
              using a smart data-driven approach to the web development process.
            </p>
            <hr className="mx-12 inset-x-auto"></hr>

            <div className="flex flex-col ml-12 pt-6">
              <div className="flex justify-start pb-6 flex-col space-y-3">
                <div className="flex items-center">
                  {" "}
                  <div className="bg-theme-primary p-[1px]   rounded-full "><TiTick className="text-white " /></div>
                  <p className="text-sm text-slate-400 ml-2 ">
                    Technical Strategy
                  </p>
                </div>
                <div className="flex items-center">
                  {" "}
                  <div className="bg-theme-primary p-[1px]  rounded-full "><TiTick className="text-white " /></div>
                  <p className="text-sm text-slate-400 ml-2 ">
                    Dedicated Support
                  </p>
                </div>
                <div className="flex items-center">
                  {" "}
                  <div className="bg-theme-primary p-[1px]   rounded-full "><TiTick className="text-white " /></div>
                  <p className="text-sm text-slate-400 ml-2 ">
                    Planned Agile Process
                  </p>
                </div>
                <div className="flex items-center">
                  {" "}
<div className="bg-theme-primary p-[1px]  rounded-full "><TiTick className="text-white " /></div>
                  <p className="text-sm text-slate-400 ml-2 ">
                    Third-party Integrations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Industries  sectionBg='bg-slate-900' industryBg='bg-slate-800' descColor='text-slate-400' />
     

      <section className=" bg-software-development-dot  md:pb-24" id="hero">
        <div className="flex flex-col items-center justify-evenly px-6 mx-auto m md:flex-row pt-24 ">
          <div className="flex flex-col md:ml-24 ">
            <h1 className=" text-4xl font-sans font-bold  text-slate-800 text-center md:text-6xl md:text-left">
              We make your Business stand out
            </h1>
            <p className=" mt-8 max-w-lg  md:mt-6 text-slate-600  leading-8 text-left ">
              Programming of custom web applications has been at the core of
             Softleaf applications technical expertise. Agile web
              development process ensures that our clients get robust
              applications meet specific business goals. Web applications that
              we have developed for our clients range from simple CMS-powered
              websites through custom CMS solutions to complex SaaS applications
              hosted on server cluster. At
              Softleaf, we use cutting-edge methods and follow the latest
              trends in web programming to build efficient channels of
              communication between you and your market. In partnership with our
              clients we have been working on projects for companies across East
              Africa.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href='/stack' className="  mb-24 text-sm font-semibold cursor-pointer mt-6 shadow-2xl md:block md:mt-12  hover:bg-theme-primary border-[1px] hover:text-white rounded-lg py-3 px-8  border-theme-primary  text-theme-primary bg-transparent">
                Checkout our technologies
              </a>
            </div>
          </div>
          <div className="relative z-20 md:w-[100%] ">
         <Zoom>   <Image src={Dashboard2_img} alt="" /></Zoom>
          </div>
        </div>
      </section>
      <GrowTogether/>

      </main>
      <Footer show={true}></Footer>

    </>
  );
};

export default Development;
