import React from 'react'
import NavLinks from '../header/NavLinks'
import Button from '../button/Button'

interface Props{
  toggle:boolean
}


const Menu = ({toggle}:Props) => {
  return (
    <>
 
   
    <div className={`${toggle?'hidden':"md:hidden flex z-30  bg-gray-50  flex-col font-semibold text-gray-700  mx-auto  w-auto rounded-sm pb-8 items-start pl-8"}`}>
        <NavLinks   mobileStyles='flex-row space-y-8  py-8'/>
        <Button
            label="Contact Me"
            labelColor="text-white"
            backGround="bg-primary-color"
            borderRadius="rounded-none"
            hover="hover:border-primary-color hover:border-2 hover:bg-white hover:text-primary-color hover:ease-in-out hover:duration-700"
          />


    </div></>
  )
}

export default Menu