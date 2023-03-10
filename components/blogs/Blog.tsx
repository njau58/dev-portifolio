import React from 'react'
import { Props } from './Blogs'



const Blog = ({blogTitle, blogImage , blogUrl}:Props) => {

  
  return (
    <div className='bg-blog-mvp bg-center bg-cover h-48 md:w-64 w-full  relative rounded-xl '>
       <div className="h-full w-full absolute opacity-20 bg-primary-color rounded-xl">
        
       </div>
       <div className="h-full flex items-center justify-center w-full absolute z-50 text-white">
       {blogTitle}
        
       </div>
    </div>


    
  )
}

export default Blog