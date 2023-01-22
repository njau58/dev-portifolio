import React from "react";
import { jobs } from "../../JobList/jobList";
import Head from "next/head";
import Header from "../../components/Header/Header";
import JobForm from "../../components/Jobs/JobForm";
import Footer from "../../components/Footer/Footer";
export const getStaticPaths = async () => {
  const opportunities = jobs[0].map((job) => {
    const slug = job.title.split(" ").join("-");

    return { ...job, slug: slug };
  });

  const paths = opportunities.map((item) => {
    return {
      params: { slug: item.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const opportunities = jobs[0].map((job) => {
    const slug = job.title.split(" ").join("-");

    return { ...job, slug: slug };
  });

  const job = opportunities.filter((item) => {
    return item.slug == params.slug;
  });

  return {
    props: {
      job,
    },
  };
};

const Opportunity = ({ job }) => {
  const colorNavChange = true;
  return (
    <>
      <Head>
        <title>{`Sofleaf Appplications | ${job[0].title}`}</title>
        <meta
          name="description"
          content="Softleaf Applications is the best web & mobile development company in Kenya.
             "
        ></meta>
      </Head>
      <Header
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
      <div className=" flex flex-col  bg-[#fbf7f9] mt-32 pb-24 mb-24 md:mx-[10%] mx-[2%]">
        <div className="flex flex-col items-center justify-center bg-theme-dark-blue  w-full ">
          <div className="text-3xl font-bold text-white mt-12">
            {job[0].title}
          </div>

          <div className="my-12 text-xl text-white">Job Application</div>
        </div>
        <div className="text-2xl mt-12 ml-2">Qualifications</div>

        <div className=" bg-white m-2  leading-8 p-4 ">
          {job[0].qualifications?.map((role, idx) => {
            return (
              <ul id={idx} className="list-disc ml-12">
                <li>{role}</li>
              </ul>
            );
          })}
        </div>
        <div className=" flex items-center justify-center ">
          <JobForm className="w-[120%] " jobTitle={job[0].title}></JobForm>
        </div>
      </div>
      <Footer show={true}></Footer>
    </>
  );
};

export default Opportunity;
