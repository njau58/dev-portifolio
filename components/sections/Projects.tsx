
import React from 'react'

import {aiWeb,webAgency,realEstate} from '../../assets/assets'
import CustomLink from '../links/CustomLink'
import Project from './Project'
import SectionHeading from '../sectionHeading/SectionHeading'

  interface Props {
    projectName?:string|any,
    projectDescription?:string|any,
    projectImage?:any,
    projectLink?:any,
    moreProjectsLink?:any
  }


const projects:Props[]=[

  {
    projectName:'Web Development Agency ',
    projectLink:'https://softleafapplications.com',
    projectImage:webAgency,
    projectDescription:`Since beginning my journey as a freelance designer nearby 7 years ago, I 've done remote work for agencies, 
    consulted for startup, and collaborated with talented people to create digital products.`
  },
  {
    projectName:'Real Estate Agency ',
    projectImage:realEstate,
    projectLink:'https://softleafapplications.com',
    projectDescription:`Since beginning my journey as a freelance designer nearby 7 years ago, I 've done remote work for agencies, 
    consulted for startup, and collaborated with talented people to create digital products.`
  },
  {
    projectName:'AI WebApp',
    projectImage:aiWeb,
    projectLink:'https://softleafapplications.com',
    projectDescription:`Since beginning my journey as a freelance designer nearby 7 years ago, I 've done remote work for agencies, 
    consulted for startup, and collaborated with talented people to create digital products.`
  },


]

const moreProjectsLink:Props[]=[{
  moreProjectsLink:'https://github.com/njau58'
}]
 console.log(moreProjectsLink[0].moreProjectsLink)


const Projects = () => {
  return (
    <div className='flex flex-col mt-48  items-center justify-center space-y-12'>

       <SectionHeading label="Projects"/>

     <div className=" mt-32 flex flex-col space-y-24 mx-auto"> {projects?.map((item, idx)=>{

        return(
          <Project key={item.projectName} projectName={item.projectName} projectDescription={item.projectDescription} projectImage={item.projectImage} projectLink={item.projectLink}/>
        )

      })}
</div>
    
<CustomLink href={moreProjectsLink[0].moreProjectsLink} linkStyles='border-2 border-primary-color bg-primary-color text-white py-2 px-4 text-base font-normal hover:bg-white hover:ease-in-out hover:duration-300 hover:text-primary-color hover:border-2 hover:border-primary-color' label='View More'></CustomLink>

    </div>
  )
}

export default Projects