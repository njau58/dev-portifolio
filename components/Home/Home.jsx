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
        <Hero />

        <Partners />
        <Solutions />

        <Process />
        <About />

        <Workwithus />

        <Empower />

        <Mantra />

        <Faqs />

        <HomeBlog blogs={blogs} />

        <GrowTogether />
      </main>

      <Footer show={true}></Footer>
    </>
  );
};

export default Home;
