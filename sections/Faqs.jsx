import React from 'react'
import Image from "next/image";
import { Zoom } from "react-reveal";
import { FAQ_img } from "../assets/assets";
import Accordion from '../components/Accordion/Accordion'
import SubHeading from '../components/subheading/SubHeading'


const Faqs = () => {

  

    const Faqs = [
        {
          title: "How long does it take to finish a project? ",
          content: `We are committed to finish the project within the shortest time possible. However, the duration of completing the project may vary depending on the complexity of the website, its features, functionalities, etc.
         Time is a factor we consider while ensuring delivery of high performing web applications. `,
        },
        {
          title: "Can I get the updates regarding the progress of my website? ",
          content: ` Yes. You can get daily updates regarding the progress of your website. You can discuss with our project manager regarding any queries or suggestions regarding your project.`,
        },
        {
          title:
            "How many changes can I make to my website without any extra cost? ",
          content: `As a top web development company in Kenya, We will make changes to your website upto 4 to 5 iterations without any extra cost. We also make any minor changes to your website free of cost. `,
        },
      ];

    
  return (
    <section className=" bg-mobile-development-dot py-16  ">
    <div className="flex flex-col  mx-auto">
  
    <SubHeading title="Got any question?" />
      <div className="text-slate-600 md:text-4xl text-3xl  text-center font-bold mb-12 ">
        Frequently Asked Questions
      </div>
    
      <div className=" mt-12  flex flex-col-reverse items-center justify-center  md:flex-row-reverse mx-4   ">
        <div className="md:max-w-3/4 ">
          {Faqs?.map((faq, idx) => {
            return (
              <Accordion
                key={idx}
                title={faq.title}
                content={faq.content}
              ></Accordion>
            );
          })}
        </div>
        <div className="md:max-w-lg relative">
          <Zoom>
            {" "}
            <Image src={FAQ_img} alt="FAQ"></Image>
          </Zoom>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Faqs