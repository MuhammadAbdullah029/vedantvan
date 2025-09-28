import React, { useEffect, useRef } from 'react'
import Scene from './Scene'
import Typed from "typed.js"

const Hero = () => {

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Optimizer",
        "Driver",
        "Strategist",
        "Catalyst",
        "Builder"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="w-[100%] plr overflow-hidden md:h-[145vh] h-[95vh] ">
        <h1 className='font-bold md:text-[7vw] leading-[1.1] text-4xl ' >I'm Vedant Vanmore</h1>
        <h1 className='font-bold md:text-[6vw] text-4xl flex items-center gap-3 ' >Turning idea into impact <span className='rounded-[55px] pt-2 pb-2 md:text-5xl bg text-2xl md:mt-0 mt-[3rem] block w-[21%]  ' ><span className='cursive' ref={typedRef} ></span></span> </h1>
        <div className='bg w-full md:rounded-[35px] rounded-[15px] md:h-[80vh] h-[40vh] mt-[5%] relative ' >
          <Scene/>
          <div className="absolute md:bg-white bg-[#F7F6F6] md:w-[30%] md:h-[40%] h-[50%] md:bottom-0 md:right-0 -bottom-[55%] radius rounded-[15px] p-[2rem] pb-[.5rem] text-[1rem] ">
            <p className='md:mb-6 mb-3 ' >Delivering efficiency, innovation, and impact through product leadership and AI automation</p>
            <a href="http://linkedin.com" target="_blank" className='bg p text-sm md:w-fit block w-full text-center '  >Discover More</a>
          </div>
          {/* Curves */}
          <div className="bg-white absolute bottom-[40%] right-0 w-[5%] h-[15%] z-20 md:flex hidden ">
            <div className="bg-black w-full h-full rounded-br-[55px] "></div>
          </div>
          <div className="bg-white absolute bottom-0 right-[30%] w-[5%] h-[15%] z-20 md:flex hidden ">
            <div className="bg-black w-full h-full rounded-br-[55px] "></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
// Innovator
// Strategist
// Catalyst
// Builder