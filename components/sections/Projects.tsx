
import React from 'react'
import {aiWeb,webAgency,realEstate} from '../../assets/assets'
import Project from './Project'

  interface Props {
    projectName:string,
    projectDescription:string,
    projectImage:any,
    projectLink:string
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
    projectName:'Web Development Agency ',
    projectImage:aiWeb,
    projectLink:'https://softleafapplications.com',
    projectDescription:`Since beginning my journey as a freelance designer nearby 7 years ago, I 've done remote work for agencies, 
    consulted for startup, and collaborated with talented people to create digital products.`
  },


]

const Projects = () => {
  return (
    <div className='flex flex-col mt-48 '>

         <div className="flex flex-col space-y-4">
        <h1 className="text-center mx-auto  font-bold text-2xl text-secondary-text-color ">
          PROJECTS
        </h1>
        <span className="border-b-4 border-primary-color w-12 mx-auto"></span>
      </div>

     <div className=" mt-32 flex flex-col space-y-24 mx-auto"> {projects?.map((item, idx)=>{

        return(
          <Project key={item.projectName} projectName={item.projectName} projectDescription={item.projectDescription} projectImage={item.projectImage} projectLink={item.projectLink}/>
        )

      })}
</div>
    


    </div>
  )
}

export default Projects