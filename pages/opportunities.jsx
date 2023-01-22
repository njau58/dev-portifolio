import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Link from "next/link";
import { jobs } from "../JobList/jobList";
import Footer from '../components/Footer/Footer'
import {FiArrowUpRight} from 'react-icons/fi'


export async function getStaticProps() {
  const opportunities = jobs[0].map((job) => {
    const slug = job.title.split(" ").join("-");

    return { ...job, slug: slug };
  });

  return {
    props: {
      opportunities,
    },
  };
}

const opportunities = ({ opportunities }) => {
  const colorNavChange = true;

  return (
    <>
      <Head>
        <title>Sofleaf Appplications | Opportunities</title>
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
        linkHoverColor={`${
          colorNavChange ? "text-theme-primary" : "text-slate-400"
        }`}
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

      <main className="pt-32">
        {opportunities.length === 0 ? (
          <div className="flex flex-col items-center justify-center my-32 mx-auto  ">
            <div className="text-3xl text-center">
              Sorry. We have no open postions at the moment.
            </div>

   
      <Link href="/blog"><a className=" text-theme-primary mt-6  hover:underline text-center mx-2">Meanwhile, checkout our blog for some insights. <FiArrowUpRight className="inline-block"></FiArrowUpRight></a></Link>
          </div>
        ) : (
          <div className="flex flex-col divide items-center justify-center space-y-12 py-12 px-12 mx-[10%] md:mx-[30%] my-32 shadow-xl bg-slate-200 rounded-lg">
            {opportunities?.map((job) => {
              return (
                <Link href={`jobs/${job.slug}`}>
                  <a className="flex flex-col font-bold text-lg cursor-pointer text-theme-primary hover:text-amber-500 hover:scale-125 duration-200 ">
                    {job.title}
                  </a>
                </Link>
              );
            })}
          </div>
        )}
      </main>
      <Footer show={true}></Footer>
    </>
 
  );
};

export default opportunities;
