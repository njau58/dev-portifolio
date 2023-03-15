import React from "react";
import { Props } from "./Blogs";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from 'next/link'

const Blog = ({ blogTitle, blogUrl,blogExcerpt }: Props) => {

  console.log(blogUrl)
  return (
    <Link href={blogUrl}>
      <a target="_blank">
    <div className="bg-white h-72 w-84 mx-2 md:mx-32 shadow-2xl my-8    relative rounded-xl  ">
      <div className=" absolute  right-2 top-2 text-primary-color  text-xl z-50">
    <BsBoxArrowUpRight />
      </div>

     

      <div className="h-full flex flex-col space-y-8 items-center justify-center  w-full absolute z-30 text-primary-text-color">
        <div className="text-xl font-semibold">{blogTitle}</div>
        <span className="text-sm text-center mx-2">
        {blogExcerpt}
        </span>
      </div>
    </div>
    </a>

    </Link>
  );
};

export default Blog;
