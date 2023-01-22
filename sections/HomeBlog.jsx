import React from 'react'
import SubHeading from '../components/subheading/SubHeading'
import BlogItems from '../components/blogitems/BlogItems'
import Link from 'next/link'

const HomeBlog = ({blogs}) => {
  return (
    <section className="py-16 bg-indigo-50">
    <SubHeading title="Get all-round insight" />
    <div className="text-slate-600 text-3xl md:text-4xl  text-center mb-24 font-bold">
      Latest from our Blog
    </div>

      <div className="flex flex-col space-y-12 md:flex-row items-center justify-center md:space-x-9 md:space-y-0 px-4  ">
        <BlogItems currentBlogs={blogs}></BlogItems>
      </div>


    <div className="flex items-center justify-center mt-9">
      {" "}
      <div className=" px-6 py-3 text-theme-primary border-[1px] border-theme-primary bg-transparent font-bold rounded-lg shadow-2xl hover:bg-theme-primary hover:text-white">
        {" "}
        <Link href="/blog">Explore more</Link>
      </div>
    </div>
  </section>
  )
}

export default HomeBlog
