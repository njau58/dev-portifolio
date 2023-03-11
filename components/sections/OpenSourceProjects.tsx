import React from 'react'
import {BsArrowRight} from 'react-icons/bs'



export interface Props {
  projectTitle?: string;
  projectExcerpt?: string;
  projectUrl: string;
  cardStyles:string,
  titleStyles:string,
  buttonText:string,
  excerptTitleStyle:string

}

const projects: Props[] = [
  {
    cardStyles:'  border-[1px]  border-white rounded-xl py-8 px-8 items-start space-y-4',
    titleStyles:'font-bold text-white text-xl',
    buttonText:'View App',
    excerptTitleStyle:'text-slate-200',
    projectTitle: `What's an MVP?`,
    projectExcerpt: ` but you also need a quick response when opportunities arise...
   `,
    projectUrl: "https://softleafapplications.com/what-is-a-minimum-viable-product",
  },

  {
    cardStyles:'  bg-white rounded-xl py-8 px-8 items-start space-y-4',
    titleStyles:'font-bold text-text-primary-color text-xl',
    buttonText:'View App',
    excerptTitleStyle:'text-slate-400',
    projectTitle: `What's an MVP?`,
    projectExcerpt: ` but you also need a quick response when opportunities arise...
   `,
    projectUrl: "https://softleafapplications.com/what-is-a-minimum-viable-product",
  },

 

];

const OpenSourceProjects = () => {






  return (
    <div className='mt-48 w-full bg-primary-color py-16'>

      <div className='flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-12 md:space-y-0 py-12 mx-4'>

        {projects?.map((item, idx)=>{

          return<div className={`${item.cardStyles}`}>
            <div className={`${item.titleStyles}`}>{item.projectTitle}</div>
            <div className={`${item.excerptTitleStyle}`}>{item.projectExcerpt}</div>
             <div className='text-secondary-color'>{item.buttonText}<span className=' pl-2 inline-block'><BsArrowRight/></span></div>



          </div>

        })}


      </div>
      
      
     </div>
  )
}

export default OpenSourceProjects