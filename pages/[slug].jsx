import React, { useState } from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {marked} from "marked";
import Header from "../components/Header/Header";
import Link from "next/link";
import { sortByDate } from "../utils";
import {CgCalendarDates} from 'react-icons/cg'
import Head from "next/head";

const Blog = ({ content, frontmatter, slug, blogs }) => {
  const [colorNavChange, setColorNavchange] = useState(true);

  return (
    <>
      {" "}

      <Head>
        <title>Website Design and Devolopment company in Kenya | {frontmatter.title}</title>
        <meta
          name="description"
          content="Softleaf Technologies is the best mobile app design and development company in Kenya.
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
        menuIconColor={`${colorNavChange ? "text-slate-600" : "text-slate-600"}`}
        logoAfterColor="text-slate-100"
      ></Header>
      <main>
      <div className="flex md:flex-row flex-col space-y-12 mt-72 mb-32   ">

  
        <div className=" flex justify-center items-center   md:w-[70%] ">
          <div className="flex flex-col  ">
            <div className="flex flex-row  items-center justify-center  mx-2">
              <div className="md:text-4xl mb-12 text-2xl text-slate-900 font-extrabold  ">
                {frontmatter.title}
              </div>
            </div>

            <div className="flex flex-row items-center justify-between mx-2 md:mx-12">
              <div className="flex flex-row   ">
                <div className="w-[2.5rem] h-[2.5rem] relative">
                  <Image
                    layout="fill"
                    alt="author"
                    src={frontmatter.author_profile}
                    className="rounded-full object-fit w-full h-full"
                  />
                </div>
                <div className="flex flex-col ml-2">
                  <div className="text-slate-600  pl-2 text-sm ">{frontmatter.author}</div>
                 <div className="flex flex-row items-center justify-center text-slate-600"> <CgCalendarDates></CgCalendarDates>
                 <div className="text-slate-600 text-xs ">
                    {frontmatter.date}
                  </div></div>
                  
                </div>
              </div>
              <div className="py-3 text-center text-xs">
                {" "}
                <div
                   className={`${
                    frontmatter.category === "product development"
                      ? "  bg-amber-500 px-3 py-1  text-white text-center"
                      : frontmatter.category === "general"
                      ? " bg-green-600 px-3 py-1  text-white"
                      : frontmatter.category === "web technology"
                      ? " bg-red-400 px-3 py-1  text-white"
                      : ""
                  }`}
                >
                  {frontmatter.category}
                </div>
              </div>
            </div>
            <div className=" mx-auto my-6 w-[95%] h-[15rem] relative bg-slate-400 rounded-lg md:w-[80%] md:mx-auto md:h-[30rem]">
              <Image
                layout="fill"
                className=" w-full h-full object-cover "
                src={frontmatter.cover_image}
                alt="cover-img"
              ></Image>
            </div>
            <div className="blog-body flex flex-col mx-9 items-center justify-center md:w-[80%] md:mx-auto">
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-9 md:ml-0 space-y-6 md:mt-9 md:w-[30%] divide-y   ">
          <div className="font-extrabold text-lg  ">Recent posts</div>
          {blogs?.slice(0, 3).map(({ frontmatter, slug }) => {
            return (
              <div idx={slug} className="flex flex-row space-x-2 pt-3 mr-12">
                 <div className=" mx-2 m w-[3rem] h-[3rem] relative">
              <Image
                layout="fill"
                className=" w-full h-full  "
                src={frontmatter.cover_image}
                alt="cover-img"
              ></Image>
            </div>
                <div className="flex flex-col space-y-2 pl-2   ">
                  <div className=" cursor-pointer text-sky-600 hover:underline hover:text-amber-500  text-base ">
                    <Link href={`${slug}`}>
                      <a>{frontmatter.title}</a>
                    </Link>
                  </div>

                  <div className=" text-sm">{frontmatter.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      </main>
      
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("blogs", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  //get blogs

  // Get files from the blogs dir
  const files = fs.readdirSync(path.join("blogs"));

  // Get slug and frontmatter from blogs
  const blogs = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("blogs", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      frontmatter,
      blogs: blogs.sort(sortByDate),
      slug,
      content,
    },
  };
}

export default Blog;
