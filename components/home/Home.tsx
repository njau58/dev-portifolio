import React, { FC, useEffect, useState } from "react";
import Header from "../header/Header";
import Hero from "../sections/Hero";
import Expertise from "../sections/Expertise";
import Projects from "../sections/Projects";
import BlogSection from "../sections/BlogSection";
import Services from "../sections/Services";
import OpenSourceProjects from "../sections/OpenSourceProjects";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Contact from "../sections/Contact";
import Footer from "../footer/Footer";

import ScrollToTop from "../scrollToTop/ScrollToTop";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [showTopButton, setShowButton] = useState<boolean>(false);

  const setPositon = () => {
    if (window.scrollY >= 400) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setPositon);
  }, []);

  return (
    <>
   
      {showTopButton && <ScrollToTop />}
      <Header />
      <div className="md:px-32 px-8 mx-auto">
        <Hero />
        <Services />
        <Expertise />
        <Projects />
        <BlogSection />
      </div>
      <OpenSourceProjects />
      <div className="md:px-32 px-4 mx-auto overflow-hidden">
        <Testimonials />
      </div>
      <div className="md:px-32 px-8 mx-auto">
        <CTA />
      </div>
      <div className="md:px-32 px-8 mx-auto">
        {" "}
        <Contact />
        <Footer />
      </div>

      <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  );
};

export default Home;
