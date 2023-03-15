import React from 'react'
import NavLinks from '../header/NavLinks'
import Link from 'next/link'
import {MdOutlineCancel} from 'react-icons/md'
import {motion, AnimatePresence} from 'framer-motion'

interface Props{
  toggle:boolean,
  setToggle:()=>void
}


const Menu = ({toggle,setToggle}:Props) => {
  return (
    <>
<AnimatePresence>
    <motion.div

initial={{ x: "100" }}
animate={{ x: 0 }}
transition={{ type: "spring", stiffness: 100 }}


    
    className={`${toggle?'hidden':"md:hidden h-screen flex w-full   fixed z-50 top-0   bg-white flex-col font-semibold text-gray-700 rounded-sm pb-8 items-start px-8"}`}>
    <div
          className="text-4xl text-gray-500 ease-out duration-500 right-8 top-8 absolute"
          onClick={setToggle}
        >
          <MdOutlineCancel></MdOutlineCancel>
        </div>
   
        <NavLinks setToggle={setToggle}  mobileStyles='flex-row w-full items-start space-y-8  pt-24 pb-12'/>
        <Link href="#contact" scroll={false}  >
            <a  onClick={setToggle} className="border-[1px] border-primary-color bg-primary-color text-white py-2 px-4 text-small font-normal  hover:bg-white hover:ease-in-out hover:duration-300 hover:text-primary-color  hover:border-primary-color">
              Contact Me
            </a>
          </Link>


    </motion.div>
    </AnimatePresence></>
  )
}

export default Menu