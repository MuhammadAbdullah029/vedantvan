import React, { useEffect, useRef } from 'react'
import Scene from './Scene'
import Typed from "typed.js"

const Hero = () => {

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Optimizer",
        "Innovator",
        "Strategist",
        "Catalyst",
        "Builder"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="w-[100%] plr overflow-hidden ">
        <h1 className='font-bold text-6xl leading-[1.1] ' >I'm Vedant Van</h1>
        <h1 className='font-bold text-6xl ' >From idea to impact <span className='rounded-[55px] pt-2 pb-2 text-4xl bg ' ><span className='cursive' ref={typedRef} ></span></span> </h1>
        <div className='bg w-full rounded-[35px] h-[80vh] mt-[5%] relative ' >
          <Scene/>
          <div className="absolute bg-white w-[30%] h-[40%] bottom-0 right-0 radius p-[2rem] pb-[.5rem] text-[1rem] ">
            <p className='mb-6' >Delivering efficiency, innovation, and impact through product leadership and AI automation</p>
            <a href="http://linkedin.com" target="_blank" className='bg-[#000] p text-sm'  >Get Started</a>
          </div>
          <div className="bg-white absolute bottom-[40%] right-0 w-[5%] h-[15%] z-20 ">
            <div className="bg-black w-full h-full rounded-br-[55px] "></div>
          </div>
          <div className="bg-white absolute bottom-0 right-[30%] w-[5%] h-[15%] z-20 ">
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