import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award_img } from "../../assets/assets";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";

const Footer = ({ show }) => {
  return (
    <>
      {show && (
        <footer className="bg-theme-dark-blue">
          <div className=" flex flex-col justify-start  md:mx-32 ml-8 pt-6 space-y-12 md:space-y-0 md:ml-auto md:flex-row md:justify-around">
            <div className="flex flex-col space-y-2">
              <div className="text-slate-50 font-semibold ">Quick Links</div>

              <div className="flex flex-col space-y-3 text-xs font-normal ">
                <Link href="/">
                  <a className=" text-white   hover:underline p-[4px] ">Home</a>
                </Link>

                <Link href="/about">
                  <a className=" text-white   hover:underline p-[4px] ">
                    Company
                  </a>
                </Link>

                <Link href="/stack">
                  <a className=" text-white   hover:underline p-[4px] ">
                    Our Stack
                  </a>
                </Link>

                <Link href="/blog">
                  <a className=" text-white   hover:underline p-[4px] ">Blog</a>
                </Link>

                <Link href="/opportunities">
                  <a className=" text-white   hover:underline p-[4px] ">
                    Careers
                  </a>
                </Link>

                <Link href="/terms-of-service">
                  <a className=" text-white   hover:underline p-[4px] ">
                    Terms of Service
                  </a>
                </Link>

                <Link href="/privacy-policy">
                  <a className=" text-white   hover:underline p-[4px] ">
                    Pivacy Policy
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <div className="text-white font-semibold">Contact Details</div>

              <div className="flex flex-row pt-4 items-center">
                <MdOutlinePlace className="text-white text-lg mr-2" />
                <div className="text-white text-xs font-normal">
                  Vision plaza, Mombasa Road.
                </div>
              </div>
              <div className="flex flex-row  items-center">
                <MdEmail className="text-white text-lg mr-2" />
                <div className="text-white text-xs font-normal">
                  <Link href="mailto:info@softleafapplications.co.ke">
                 
                    info@softleafapplications.co.ke
                  </Link>
                </div>
              </div>
              <div className="flex flex-row  items-center">
                <AiFillPhone className="text-white text-lg mr-2" />
                <div className="text-white text-xs font-normal cursor-pointer">
                  {" "}
                  <Link href="tel:+254706338454">+254 110 473 355</Link>
                </div>
              </div>
            </div>

            <div className="flex justify-start items-center">
              <div className=" w-[9rem]">
                <Link
                  href="https://clutch.co/press-releases/recognizes-best-performing-b2b-providers-kenya-2021?utm_campaign=Awards%20Notifications&utm_medium=email&_hsmi=169627331&_hsenc=p2ANqtz-_mbG8d8V8n1Pu4nCD2fL3wR3sMEo2gMWadK8poKgCq3_IZNKJUb1D4fP7jIVfqISwqiwQyGwqLDqx4Djgv2Cjm-aY6xQ&utm_content=169627331&utm_source=hs_email"
                  passHref={true}
                >
                  <Image src={Award_img} alt="award"></Image>
                </Link>
              </div>
            </div>
          </div>

          <hr className="mt-12 border-slate-700"></hr>
          <div className="flex flex-row justify-center">
            <div className="text-center text-xs text-slate-100 my-2">
              &copy; {new Date().getFullYear()} Powered by SoftLeaf Applications
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
