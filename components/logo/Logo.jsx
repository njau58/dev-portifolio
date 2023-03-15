import React from 'react'
import Image from 'next/image'
import {logoImage} from '../../assets/assets'
import Link from 'next/link'



const Logo = () => {
  return (
<Link href='/'>
<Image
          src={logoImage}
          alt="Logo"
          width={75}
          height={75}
          className=" object-contain cursor-pointer"
        ></Image>
     
</Link>
   
      
    
  )
}

export default Logo