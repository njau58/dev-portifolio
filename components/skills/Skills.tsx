import React from 'react'
import {DiReact} from 'react-icons/di'
import {SiNextdotjs} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {FiFigma} from 'react-icons/fi'
import {AiFillHtml5} from 'react-icons/ai'
import {SiTailwindcss} from 'react-icons/si'
import Skill from './Skill'



interface Props{
    skill:string
    description:string
    icon:JSX.Element
}


const skills:Props[]=[
    {
        skill:'Javascript',
        description:'The technological revolution is changing aspect',
        icon:<IoLogoJavascript/>
    },
    {
        skill:'ReactJS',
        description:'The technological revolution is changing aspect',
        icon:<DiReact/>
    },
    {
        skill:'NextJS',
        description:'The technological revolution is changing aspect',
        icon:<SiNextdotjs/>
    },
    {
        skill:'Figma',
        description:'The technological revolution is changing aspect',
        icon:<FiFigma/>
    },
    {
        skill:'HTML5',
        description:'The technological revolution is changing aspect',
        icon:<AiFillHtml5/>
    },
    {
        skill:'TailwindCSS',
        description:'The technological revolution is changing aspect',
        icon:<SiTailwindcss/>
    }

]


const Skills = () => {
   return <div className='grid gap-y-12 md:grid-cols-3 mx-auto'  >{
 skills.map((item, idx)=>{

    return(<Skill icon={item.icon} description={item.description} skill={item.skill}/>)

})
}
</div>



}

export default Skills