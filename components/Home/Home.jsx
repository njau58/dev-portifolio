import React, { useState, useEffect, useLayoutEffect } from "react";

import GrowTogether from "../GrowTogether/GrowTogether";
import { BiCodeAlt } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import Solutions from "../../sections/Solutions";
import { useDispatch } from "react-redux";
import { toggleQuoteModal } from "../../redux/features/toggleSlice";
import Header from "../../components/Header/Header";
import { FaAngleUp } from "react-icons/fa";
import axios from "axios";
import { sortByDate } from "../../utils";
import Head from "next/head";
import Footer from "../Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Partners from "../../sections/Partners";
import Hero from "../../sections/Hero";
import Process from "../../sections/Process";
import Empower from "../../sections/Empower";
import Workwithus from "../../sections/Workwithus";
import Faqs from "../../sections/Faqs";
import Mantra from "../../sections/Mantra";
import About from "../../sections/About";
import HomeBlog from "../../sections/HomeBlog";
import SubHeading from "../subheading/SubHeading";
import Solution from "../Solution/Solution";
import Link from "next/link";
import Zoom from 'react-reveal'
import { GiTechnoHeart } from "react-icons/gi";
import { GiCutDiamond } from "react-icons/gi";
import { IoMdChatbubbles } from "react-icons/io";
import Accordion from "../Accordion/Accordion";


import Typical from "react-typical";
import Button from "../Button/Button";

import { hero_banner , aws,
 
  AfricasTalkking_img,FAQ_img,
  team,
  Daraja_img,
  DigitalOcean_img } from "../../assets/assets";
import Image from "next/image";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("api/blog")
      .then(({ data }) => setBlogs(data.data?.sort(sortByDate).slice(0, 3)));
  }, []);

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quoteModalToggle = () => {
    dispatch(toggleQuoteModal());
  };

  const dispatch = useDispatch();

  const [colorNavChange, setColorNavchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorNavchange(true);
    } else {
      setColorNavchange(false);
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const partners = [
    aws,
    AfricasTalkking_img,
    DigitalOcean_img,
    Daraja_img,
  ];
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
  
  const Faqs = [
    {
      title: "How long does it take to finish a project? ",
      content: `We are committed to finish the project within the shortest time possible. However, the duration of completing the project may vary depending on the complexity of the website, its features, functionalities, etc.
     Time is a factor we consider while ensuring delivery of high performing web applications. `,
    },
    {
      title: "Can I get the updates regarding the progress of my website? ",
      content: ` Yes. You can get daily updates regarding the progress of your website. You can discuss with our project manager regarding any queries or suggestions regarding your project.`,
    },
    {
      title:
        "How many changes can I make to my website without any extra cost? ",
      content: `As a top web development company in Kenya, We will make changes to your website upto 4 to 5 iterations without any extra cost. We also make any minor changes to your website free of cost. `,
    },
  ];
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
    <>
      <Head>
        <title>
          Softleaf Applications - Website Design and Mobile Development company
          in Kenya
        </title>
        <meta
          name="description"
          content="Softleaf Applications is the best web & mobile development company in Kenya. We build for individuals and enterprises.
         "
        ></meta>
      </Head>
      <Header
        colorNavChange={colorNavChange}
        navBgColor={`${colorNavChange ? "bg-white" : "bg-transparent"}`}
        linkActiveColor={`${
          colorNavChange ? "text-sky-800" : "text-theme-primary"
        }`}
        linkHoverColor={`${
          colorNavChange ? "text-theme-primary" : "text-white"
        }`}
        linkBaseColor={`${
          colorNavChange ? "text-slate-600" : "text-slate-300"
        }`}
        logoColor={`${colorNavChange ? "text-slate-600" : "text-slate-50"}`}
        navBorderBottom={`${colorNavChange ? "border-b-[1px]" : "border-b-0"}`}
        menuIconColor={`${colorNavChange ? "text-slate-700" : "text-slate-50"}`}
        logoAfterColor="text-slate-100"
      ></Header>
      <main>
        {showTopBtn && (
          <AnimatePresence>
            <motion.button
              initial={{ x: "100" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              exit={{ x: -100, transition: { ease: "easeInOut" } }}
              onClick={goToTop}
              className=" bg-theme-secondary z-50 hover:bg-theme-dark-blue   text-white p-2 rounded-full font-bold text-2xl bottom-2 right-2 fixed "
            >
              <FaAngleUp className="font-bold text-xl"></FaAngleUp>
            </motion.button>
          </AnimatePresence>
        )}
    <section className=" relative  bg-fixed    bg-gradient-to-t to-[#11345a] from-[#5258fb] via-[#11345a] rounded-br-full ">
      <div className="flex flex-row max-w-7xl mx-auto items-center justify-center py-36 ">
      <div className="relative z-20   ">
            <div className=" flex flex-col  justify-start mx-6  space-y-6 mt-16 md:mt-0  ">
              <motion.div
              initial={{opacity:0}}

              animate={{opacity:1}}
              transition={{duration:2.5 }}


               className="  text-5xl md:text-6xl  font-bold   text-white w-full   ">
             <span className="text-transparent  bg-clip-text bg-gradient-to-r from-theme-secondary to-pink-600"> Custom</span> Web solutions Focused on your Business Success{" "}
                <Typical
                  className="text-[2rem]    pt-3"
                  steps={[
                    "Discover.",
                    2000,
                    "Innovate",
                    2000,
                    " Connect.",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </motion.div>


              <motion.div 

              initial={{opacity:0}}
              animate={{opacity:1}}
            transition={{duration:2.5}}
              
              className="   text-white">
                SoftLeaf Applications help you bring your product and idea to
                life - whether it's a Minimum Viable Product, UX/UI Services or
                general help to scale your business.
              </motion.div>


             <motion.div
             initial={{y:'100vh'}} 
             animate={{y:0}}
             transition={{duration:2, delay:0.5, type:'spring', stiffness:20}}
             
             > <Button onClick={quoteModalToggle} label=" Elevate Your Business Now" extra="px-6 py-3 flex justify-start]"></Button></motion.div>

            
            </div> 
          </div>

          <div  className="hidden md:flex relative z-40 w-[95rem] h-[40.625rem]  "> <Image layout="fill" className="w-full h-full object-cover" src={hero_banner}></Image></div>
      </div>
          
        
          
          <div className=" absolute bg-theme-dark-blue    md:opacity-60 opacity-80 inset-y-0  z-10 w-full h-full"></div>

        </section>

        <section className='bg-indigo-50 pb-24  '>
    <div className='text-center text-slate-500 py-12 text-sm'> THEY HAVE PARTNERED WITH US</div>

    <div className='flex flex-row items-center justify-center max-w-lg  md:mx-auto mx-4 '>
    {partners.map((partner, idx) => {
                return (
                  <div key={idx} className="relative h-[4rem] w-full bg-indigo-50 ">
                    {" "}
                    <Image
                      layout="fill"
                      className="  h-full object-contain grayscale mix-blend-multiply "
                      src={partner}
                      alt="slider"
                    ></Image>
                  </div>

                
                );
              })}
    </div>
    
    </section>

    <section className=" my-12  ">
          <div className="flex flex-col pt-24">
            <div className="flex flex-col text-center items-center space-y-3 mb-12">
          <SubHeading title="Ideal solutions for you"/>
              <div className=" text-3xl font-bold text-slate-600 md:text-4xl">
                Our Solutions
              </div>
             
            </div>
            <div className="flex md:flex-row md:mx-auto px-2 md:px-12 md:space-x-12 flex-col  mx-6 space-y-12 md:space-y-0">
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

        <Process />
           
    <section className="  my-24">
    
    <SubHeading title="Awesome experience"/>
      <div className=" text-3xl md:text-4xl mx-2 font-bold text-slate-600 text-center mb-4 ">
        We Are SoftLeaf Applications
      </div>
 

      <div className="flex flex-col items-center justify-center md:space-x-12 md:mx-24 md:flex-row mx-6 mt-12  ">
        <div className="flex flex-col md:max-w-xl ">
          <p className="  text-slate-500 leading-7   md:text-left text-center text-sm    ">
            SoftLeaf Applications was founded with an aim to deliver robust
            and business-oriented software development solutions. Today, we
            can proudly say that the colors of our diligence turned out to
            be quite sky-lightning, We are currently the Leading Software
            Development Company in Kenya. Our personnel is highly skilled,
            with years of experience in the industry. We are distinguished
            by our responsibility, expertise and fast development time
          </p>
          <div className="flex md:justify-left justify-center  mt-12">
            <div className=" mb-24 md:mb-0 px-16 flex items-center shadow-2xl py-3 font-bold border-[1px] text-theme-primary border-theme-primary text-sm cursor-pointer rounded-lg  hover:bg-theme-primary hover:text-white">
              <Link href="/about">Explore more</Link>
            </div>
          </div>
        </div>
        <div layout="fill" className="relative  md:max-w-xl ">
     
            {" "}
          <Zoom><Image src={team} alt="empower " className="w-full h-full  object-contain"/></Zoom>  
         

        
        </div>
      </div>
    </section>

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

        <Empower />

        <Mantra />

        <section className=" bg-mobile-development-dot py-16  ">
    <div className="flex flex-col  mx-auto">
  
    <SubHeading title="Got any question?" />
      <div className="text-slate-600 md:text-4xl text-3xl  text-center font-bold mb-12 ">
        Frequently Asked Questions
      </div>
    
      <div className=" mt-12  flex flex-col-reverse items-center justify-center  md:flex-row-reverse mx-4   ">
        <div className="md:max-w-3/4 ">
          {Faqs?.map((faq, idx) => {
            return (
              <Accordion
                key={idx}
                title={faq.title}
                content={faq.content}
              ></Accordion>
            );
          })}
        </div>
        <div className="md:max-w-lg relative">
          <Zoom>
            {" "}
            <Image src={FAQ_img} alt="FAQ"></Image>
          </Zoom>
        </div>
      </div>
    </div>
  </section>

        <HomeBlog blogs={blogs} />

        <GrowTogether />
      </main>

      <Footer show={true}></Footer>
    </>
  );
};

export default Home;
