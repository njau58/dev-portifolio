import React from 'react'
import {FaHeart, FaQuoteRight} from 'react-icons/fa'

const Mantra = () => {
  return (
    <section className="bg-mobile-development-dot1  bg-repeat   ">
          <div className="flex flex-col space-y-16 md:space-y-0 md:flex-row justify-center items-center md:mx-6 mx-2 py-12   ">
            <div className="flex flex-col space-y-4 justify-center ml-6 mt-12">
              <div className="text-slate-700 font-thin text-3xl md:text-4xl">
                {" "}
                We{" "}
                <FaHeart className="inline-block animate-pulse text-theme-primary" />{" "}
                our clients
              </div>
              <p className="text-slate-500 text-sm md:text-base ">
                Since 2019, Softleaf has partnered with over 90 clients, and
                maintained a 100% client retention rate.
              </p>
            </div>
            <div className="flex flex-col p-24 space-y-6 rounded-lg shadow-xl md:mx-3 bg-white">
              <div className="-mt-16 -ml-12 text-3xl text-slate-800 font-thin">
                Our Mantra...
              </div>
              <div className="flex flex-row space-x-6">
                <FaQuoteRight className="text-8xl text-theme-primary -mt-8 -ml-9"></FaQuoteRight>
                <p className="  text-slate-500 md:text-base tex-sm ">
                  Give your clients the earliest delivery consistent with
                  quality - whatever the inconvenience to us. Arthur C. Nielsen
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Mantra