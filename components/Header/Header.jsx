import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleContactModal,
  toggleQuoteModal,
} from "../../redux/features/toggleSlice";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

import Link from "next/link";
import Logo from '../logo/Logo'

import ContactModal from "../ContactModal/ContactModal";
import QuoteModal from "../QuoteModal/QuoteModal";
import Fade from "react-reveal/Fade";

import Button from "../Button/Button";



const Header = ({
  navBgColor,
  linkActiveColor,
  linkBaseColor,
  linkHoverColor,
  logoColor,
  logoAfterColor,
  menuIconColor,
  navBorderBottom,
  colorNavChange
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { showContactModal, showQuoteModal } = useSelector((state) => ({
    ...state.app,
  }));

  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileMenuLogo, setMobileMenuLogo] = useState(true);

  const contactModalToggle = () => {
    dispatch(toggleContactModal());
  };


  const handleMenuToggle = () => {
    setShowMenu((prev) => !prev);
    setMobileMenuLogo(prev=>!prev)
  };
  const closeMenuMobile = () => {
    setShowMenu(false);
  };



  const navbg = showMenu ? "bg-white" : navBgColor;
  const logoClr = showMenu ? "text-slate-600" : logoColor;
  const menubg = showMenu ? "text-slate-600" : menuIconColor;

  return (
    <>
      {showQuoteModal && <QuoteModal />}
      {showContactModal && <ContactModal />}

      <nav
        className={`${navbg} fixed w-[100%] top-0 z-50 py-6 ${navBorderBottom}  `}
      >
        <div className="flex items-center max-w-7xl  justify-between md:px-24 mx-auto">
          

         <Logo colorNavChange={colorNavChange} mobileMenuLogo={mobileMenuLogo}></Logo>           

          <ul className="font-semibold text-medium hidden md:flex space-x-6">
            <li>
              <Link href="/about">
                <a
                  className={
                    router.asPath == "/about"
                      ? `${linkActiveColor}`
                      : `${linkBaseColor} hover:${linkHoverColor} cursor-pointer`
                  }
                >
                  Company
                </a>
              </Link>
            </li>

            <div
              className={`${linkBaseColor} peer cursor-pointer hover:${linkHoverColor}`}
            >
              Services{" "}
              <AiOutlineCaretDown className="inline-block "></AiOutlineCaretDown>
            </div>
            {/* hover services menu          */}
            <Fade bottom>
              <ul className=" cursor-pointer hidden   peer-hover:flex hover:flex border-t-4 border-theme-primary bg-white  shadow-xl  text-slate-600 z-100 absolute space-y-6     justify-center p-6 flex-col items-center   top-[9.6rem]  ">
                <div className="p-16 relative -mt-32 z-10 opacity-0"></div>
                <li>
                  <Link href="/web-development-company-kenya">
                    <a
                      className={
                        router.asPath == "/web-development-company-kenya"
                          ? " text-sky-700"
                          : " text-slate-700 px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-theme-primary mt-0 "
                      }
                    >
                      Web Development
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ui-ux-design-company-kenya">
                    <a
                      className={
                        router.asPath == "/ui-ux-design-company-kenya"
                          ? " text-sky-700"
                          : " text-slate-700 px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-theme-primary mt-0  "
                      }
                    >
                      UI/UX Design
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/mobile-development-company-kenya">
                    <a
                      className={
                        router.asPath == "/mobile-development-company-kenya"
                          ? " text-sky-700"
                          : " text-slate-700 px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-theme-primary mt-0  "
                      }
                    >
                      Mobile Development
                    </a>
                  </Link>
                </li>
              </ul>
            </Fade>

            <li>
              <Link href="/stack">
                <a
                  className={
                    router.asPath == "/stack"
                      ? `${linkActiveColor}`
                      : `${linkBaseColor} hover:${linkHoverColor} cursor-pointer`
                  }
                >
                  Our stack
                </a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/blog">
                <a
                  className={
                    router.asPath == "/blog"
                      ? `${linkActiveColor}`
                      : `${linkBaseColor} hover:${linkHoverColor} cursor-pointer`
                  }
                >
                  Blog
                </a>
              </Link>
            </li>
          </ul>

          <Button
            label="Let's connect"
            onClick={contactModalToggle}
            px="px-6"
            py="py-3"
            extra="py-3 px-6  hidden md:flex"
          ></Button>

          {/* Hamburger */}
          <div
            onClick={handleMenuToggle}
            className={`${menubg} text-2xl font-sans font-extrabold  md:hidden mx-4  md:pl-0 `}
          >
            {!showMenu ? <GiHamburgerMenu /> : <MdOutlineClose />}
          </div>
        </div>

        {/* Mobile Menu */}

        <div className={`${showMenu ? "" : "hidden"}`}>
          <Fade>
            {" "}
            <div className=" flex flex-col       pl-9 pr-12   bg-white h-[20rem] overflow-y-scroll   pt-12 text-sm   w-[100%]      ">
              <div className=" font-normal  text-medium flex flex-col space-y-5  ">
                <Link href="/about">
                  <a
                 


                    onClick={closeMenuMobile}
                    className="text-slate-600 cursor-pointer hover:text-blue-400 mr-24 hover:scale-150 hover:origin-left ease-in-out duration-500"
                  >
                    Company
                  </a>
                </Link>

                <div className=" peer flex flex-row  cursor-pointer justify-start  ">
                  <div className="text-slate-600 cursor-pointer hover:text-blue-400 hover:scale-150 hover:origin-left ease-in-out duration-500">
                    {" "}
                    Services
                  </div>
                  <span
                    onClick={() => setShowServices((prev) => !prev)}
                    className=" flex items-center justify-center"
                  >
                    <AiOutlineCaretDown
                      className={`text-slate-600 text-lg ${
                        showServices
                          ? "rotate-180 transition-all duration-700"
                          : ""
                      }  ml-12 transition-all duration-700 rounded-full`}
                    ></AiOutlineCaretDown>
                  </span>
                </div>

                {showServices && (
                  <div className=" flex  border-l-[5px] pl-6  border-l-slate-100  items-start justify-center  flex-col space-y-5 cursor-pointer transition ease-in-out duration-1000">
                    <Link href="/web-development-company-kenya">
                      <a
                        onClick={closeMenuMobile}
                        className="text-slate-600 cursor-pointer hover:text-blue-400 hover:scale-150 hover:origin-left ease-in-out duration-500"
                      >
                        Web Development
                      </a>
                    </Link>
                    <Link href="/ui-ux-design-company-kenya">
                      <a
                        onClick={closeMenuMobile}
                        className="text-slate-600 cursor-pointer hover:text-blue-400 hover:scale-150 hover:origin-left ease-in-out duration-500"
                      >
                        UI/UX Design
                      </a>
                    </Link>
                    <Link href="/mobile-development-company-kenya">
                      <a
                        onClick={closeMenuMobile}
                        className="text-slate-600 cursor-pointer hover:text-blue-400 hover:scale-150 hover:origin-left ease-in-out duration-500"
                      >
                        Mobile Development
                      </a>
                    </Link>
                  </div>
                )}

                <Link href="/stack">
                  <a
                    onClick={closeMenuMobile}
                    className="text-slate-600 cursor-pointer hover:text-blue-400 mr-24 hover:scale-150 hover:origin-left ease-in-out duration-500"
                  >
                    Our stack
                  </a>
                </Link>
                <Link href="/blog">
                  <a
                    onClick={closeMenuMobile}
                    className="text-slate-600 cursor-pointer hover:text-blue-400 hover:scale-150 mr-24 hover:origin-left duration-500"
                  >
                    Blog
                  </a>
                </Link>
              </div>
              <div className="flex flex-col space-y-6  justify-center items-center mt-12 ">
                <Button
                  onClick={contactModalToggle}
                  label="contact us"
                  extra="w-[40vw] py-2 mb-12 "
                ></Button>
              </div>
            </div>
          </Fade>
        </div>
      </nav>
    </>
  );
};

export default Header;
