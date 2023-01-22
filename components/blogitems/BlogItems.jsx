import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {BsArrowRight} from 'react-icons/bs'
import {CgCalendarDates} from 'react-icons/cg'


function BlogItems({ currentBlogs }) {
    return (
      <>
        {currentBlogs?.map((blog, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col  shadow-lg  pb-10 max-w-lg bg-white"
                >
                  <div className=" w-full h-[14rem] relative">
                    <Image
                      layout="fill"
                      className=" object-cover transition-all ease-in-out duration-700 hover:transform hover:scale-150"
                      src={blog.frontmatter.cover_image}
                      alt="blogCover"
                    ></Image>
                  </div>

                  <div className="flex flex-row justify-between mt-5 mx-2 ">
                  <div className="flex flex-row items-center justify-center text-slate-600"> <CgCalendarDates></CgCalendarDates>
                 <div className="text-slate-600 text-xs ml-1 ">
                    {blog.frontmatter.date}
                  </div></div>
                    <div
                      className={`${
                        blog.frontmatter.category === "product development"
                          ? "  bg-amber-500 px-3 py-1 text-xs  text-white"
                          : blog.frontmatter.category === "general"
                          ? " bg-green-600 px-3 py-1 text-xs text-white"
                          : blog.frontmatter.category === "web technology"
                          ? " bg-red-400 px-3 py-1 text-xs  text-white"
                          : ""
                      }`}
                    >
                      {blog.frontmatter.category}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4  mt-9 ">
                    <div className="text-2xl text-theme-primary font-bold mx-4 ">
                      {blog.frontmatter.title}
                    </div>
                    <div className="text-slate-500 text-sm leading-6 ml-4">
                      {" "}
                      {blog.frontmatter.excerpt}
                    </div>
                  </div>

                  <div className="flex flex-row justify-between mx-6  mt-12">
                    <div className=" cursor-pointer">

                      <div className='text-theme-dark-blue '>
                      <Link href={`${blog.slug}`}>
                        
                       <div> Read more <BsArrowRight className=" inline-block text-theme-dark-blue " /></div>
                     
                    </Link>
                      </div>
                  
                    </div>
                    <div className="flex flex-row items-center justify-center ">
                      <div className="w-[2.5rem] h-[2.5rem] relative">
                        <Image
                          layout="fill"
                          src={blog.frontmatter.author_profile}
                          className="rounded-full object-contain w-full h-full "
                          alt="authorProfile"
                        />
                      </div>
                      <p className="text-slate-500 font-semibold text-xs  pl-2 ">
                        {blog.frontmatter.author}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
      </>
    );
  }

  export default BlogItems
  