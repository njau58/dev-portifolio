import React from 'react'
import {DiReact} from 'react-icons/di'
import {SiNextdotjs} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {FiFigma} from 'react-icons/fi'
import {AiFillHtml5} from 'react-icons/ai'
import {SiTailwindcss} from 'react-icons/si'
import { SiRedux,SiMongodb} from 'react-icons/si'
import Skill from './Skill'



interface Props{
    skill:string
    description:string
    icon:JSX.Element
}


const skills:Props[]=[
    {
        skill:'Javascript',
        description:'A programming language used to add interactivity and dynamic behavior to websites.',
        icon:<IoLogoJavascript/>
    },
    {
        skill:'ReactJS',
        description:'AJavaScript library for building user interfaces for creating fast and interactive web applications.',
        icon:<DiReact/>
    },
    {
        skill:'NextJS',
        description:' A reactjs framework for creating server-rendered applications.',
        icon:<SiNextdotjs/>
    },
    {
        skill:'Figma',
        description:'A design tool used for creating user interfaces and prototypes.',
        icon:<FiFigma/>
    },
    {
        skill:'HTML5',
        description:'Latest version of HTML that describes the stracture of a webpage',
        icon:<AiFillHtml5/>
    },
    {
        skill:'TailwindCSS',
        description:'A utility-first CSS framework to style web components',
        icon:<SiTailwindcss/>
    },
    {
        skill:'Redux',
        description:'State management library for react applications',
        icon:<SiRedux/>
    },  {
        skill:'MongoDB',
        description:'MongoDB is a document-oriented NoSQL database used to store and query data.',
        icon:<SiMongodb/>
    }



]


const Skills = () => {
   return <div className='grid gap-y-12 md:grid-cols-4 '  >{
 skills.map((item, idx)=>{

    return(<Skill key={item.skill} icon={item.icon} description={item.description} skill={item.skill}/>)

})
}
</div>



}

export default Skills