import React from 'react'
import { motion } from 'framer-motion'


const buttonVariants = {
  hidden:{
    scale:1
  },
  hover:{
    scale:[1,1.1,1,1.1,1,1.1,1],
    boxShadow:"0px 0px 2px rgb(82,88,251)"

  }

  
}

const Button = ({onClick,label,extra}) => {
  return (
    <motion.button
    variants={buttonVariants}
    initial="hidden"
    whileHover="hover"
   

    onClick={onClick}
    className={`  ${extra}  bg-theme-primary text-center    text-white text-sm  cursor-pointer rounded-lg hover:border-[1px] hover:border-theme-primary hover:text-theme-primary hover:bg-transparent`}
  >{
    label
  }
   
  </motion.button>
  )
}

export default Button