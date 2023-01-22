import React, { useState, useEffect } from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { sortByDate } from "../../utils";
import Header from "../../components/Header/Header";
import ReactPaginate from "react-paginate";
import BlogItems from "../../components/BlogItems";



const Blogs = ({ blogs }) => {
  const [colorNavChange, setColorNavchange] = useState(true);

   // We start with an empty list of items.
   const [currentBlogs, setCurrentBlogs] = useState(null);
   const [pageCount, setPageCount] = useState(0);
   // Here we use item offsets; we could also use page offsets
   // following the API or data you're working with.
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 4
 
   useEffect(() => {
     // Fetch items from another resources.
     const endOffset = itemOffset + itemsPerPage;
     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
     setCurrentBlogs(blogs?.slice(itemOffset, endOffset));
     setPageCount(Math.ceil(blogs?.length / itemsPerPage));
   }, [itemOffset, itemsPerPage]);
 
   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
     const newOffset = (event.selected * itemsPerPage) % blogs?.length;
     console.log(
       `User requested page number ${event.selected}, which is offset ${newOffset}`
     );
     setItemOffset(newOffset);
   };

  return (
    <>
      <Header
        navBgColor={`${colorNavChange ? "bg-white" : "bg-transparent"}`}
        linkActiveColor={`${
          colorNavChange ? "text-sky-800" : "text-amber-500"
        }`}
        linkHoverColor={`${colorNavChange ? "text-amber-500" : "text-white"}`}
        linkBaseColor={`${
          colorNavChange ? "text-slate-600" : "text-slate-300"
        }`}
        logoColor={`${colorNavChange ? "text-slate-600" : "text-slate-50"}`}
        navBorderBottom={`${colorNavChange ? "border-b-[1px]" : "border-b-0"}`}
        menuIconColor={`${colorNavChange ? "text-slate-800" : "text-slate-800"}`}
        logoAfterColor="text-slate-100"
      ></Header>
      <section className=" relative py-32 bg-fixed bg-blog-bg   bg-cover bg-no-repeat ">
        <div className="relative z-20 flex flex-col space-y-9 md:mx-[30%]">
          <div className=" text-6xl text-slate-50 text-center font-semibold ">
            Our Blog
          </div>
          <p className=" text-center text-slate-50">
            {" "}
            Get the latest tech news and articles in Kenya to help you
            understand your app/software/website project better.
          </p>
        </div>

        <div className=" absolute bg-cyan-900 opacity-50 inset-y-0 z-10 w-full h-full"></div>
      </section>

      <div className="my-24 ">
        <div className=" flex flex-col md:flex-row  ">
       
          <div className="grid grid-cols-1 gap-6 gap-y-4 md:grid-cols-2 md:mx-12  mx-2   ">
          <BlogItems currentBlogs={currentBlogs} ></BlogItems>
          </div>
        </div>
      </div>
   <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
    </>
  );
};

export async function getStaticProps() {
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
      blogs: blogs.sort(sortByDate),
    },
  };
}

export default Blogs;











