import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import Header from "../components/Header/Header";
import ReactPaginate from "react-paginate";
import BlogItems from "../components/blogitems/BlogItems";
import Head from "next/head";
import Footer from '../components/Footer/Footer'
import {useRouter} from "next/router";
import Link from "next/link";
import {FaAngleRight} from 'react-icons/fa'

// import {createClient} from 'contentful'
// import {documentToReactComponents} from '@contentful/rich-text-react-renderer'



export async function getStaticProps() {

  // const client = createClient({
  //   space:'snazzryzlf1t',
  //   accessToken:'J16II7WKDZ1zY2RRTKVQYWVXrJ349pm99Gu0l-rHT3Y'

  // })

  // const res = await client.getEntries({content_type:'blog'})



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













const Blogs = ({ blogs }) => {
  const [colorNavChange, setColorNavchange] = useState(true);

  const router = useRouter()
  console.log(router)



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
     setCurrentBlogs(blogs?.slice(itemOffset, endOffset));
     setPageCount(Math.ceil(blogs?.length / itemsPerPage));
   }, [itemOffset, itemsPerPage]);
 
   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
     const newOffset = (event.selected * itemsPerPage) % blogs?.length;
     setItemOffset(newOffset);
   };

  return (
    <>
     <Head>
     <title>Website Design and Mobile Development company in Kenya</title>
        <meta
          name="description"
          content="Softleaf Applications is the best web & mobile development company in Kenya. We build for individuals and enterprises.
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
      <section className=" relative py-32 pb-44 bg-fixed bg-blog-bg   bg-cover bg-no-repeat ">
        <div className="relative z-20 flex flex-col space-y-9 md:mx-[30%]">
          <div className=" text-6xl text-slate-50 text-center font-semibold pt-24 ">
            Our Blog
          </div>
          <p className=" text-center text-slate-50">
            {" "}
            Get the latest tech news and articles in Kenya to help you
            understand your app/software/website project better.
          </p>
          <div className="text-white z-20  space-x-2 flex flex-row items-center justify-center">   <div className="hover:cursor-pointer hover:text-theme-primary"  > <Link href="/">Home</Link>
        </div>
        <div><FaAngleRight/></div>

        <div><Link href="/blog">Blog</Link></div>

        <div>

        </div>
         </div>
       
        </div>

        <div className=" absolute bg-theme-dark-blue opacity-50 inset-y-0 z-10 w-full h-full "></div>
      </section>

      <div className="flex flex-row  mx-2 items-center justify-left space-x-4">

   
     
      </div>

      <div className="bg-indigo-50 py-24 ">
        <div className=" flex flex-col md:flex-row  ">
       
          <div className="grid grid-cols-1 gap-6 gap-y-4 md:grid-cols-2 md:px-12  px-2  mx-auto  ">
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
                  </main>

                  
               
          <Footer show={true}></Footer>       
                  
    </>
  );
};



export default Blogs;

