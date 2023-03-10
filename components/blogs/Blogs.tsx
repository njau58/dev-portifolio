import { LinkProps } from "next/link";
import React from "react";
import Blog from "./Blog";

export interface Props {
  blogTitle?: string;
  blogImage?: string;
  blogUrl: string;
}

const blogs: Props[] = [
  {
    blogTitle: `What's an MVP?`,
    blogImage: "fdffdd",
    blogUrl: "https:softleafapplictions.com/blog",
  },

  {
    blogTitle: `What's an MVP?`,
    blogImage: "fdffdd",
    blogUrl: "https:softleafapplictions.com/blog",
  },
];

const Blogs = () => {
  return (
    <div className="flex flex-row md:space-x-16 space-x-8 mx-auto max-w-3xl w-full">
      {blogs?.map((item, idx) => {
        return <Blog blogImage={item.blogImage} blogUrl={item.blogUrl}  blogTitle={item.blogTitle}/>;
      })}
    </div>
  );
};

export default Blogs;
