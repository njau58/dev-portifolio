import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'



interface Props {
  mobileStyles?:string,
  desktopStyles?:string
  setToggle?:any
}

const NavLinks = ({mobileStyles,desktopStyles,setToggle}:Props) => {

    const router = useRouter()
  return (
    <div> 
       <ul className={` ${mobileStyles} ${desktopStyles} `}>
    <li onClick={setToggle} className={`${ router.asPath == "/" ? `md:text-primary-color ease-in  ` : ` hover:text-secondary-color duration-500 ease-in-out text-gray-700 ` }`}><Link href="/"> Home</Link></li>
    <li onClick={setToggle} className={`${ router.asPath == "/#projects" ? `md:text-primary-color ease-in  ` : `hover:text-secondary-color duration-500 ease-in-out text-gray-700` }`}> <Link href="#projects" scroll={false}> Projects</Link></li>
    <li  onClick={setToggle}   className={`${ router.asPath == "/#blog" ? `md:text-primary-color ease-in mx-auto  ` : `hover:text-secondary-color duration-500 ease-in-out text-gray-700 ` }`}> <Link href="#blog" scroll={false}> Blog</Link></li>
   </ul></div>
  )
}

export default NavLinks