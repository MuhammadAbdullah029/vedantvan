import React, { useEffect, useRef } from 'react'
import Scene from '../components/Scene.jsx'
import Typed from "typed.js"

const Hero = ({ aboutRef }) => {

  const typedRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
      <div className="w-[100%] plr overflow-hidden xl:h-[124vh] h-[115vh] ">
        <h1 className='font-bold md:text-[7vw] leading-[1.1] text-[9vw] ' >I'm Vedant Vanmore</h1>
        <h1 className='font-bold md:text-[6vw] leading-[1.1] text-[8vw] flex md:flex-row flex-col items-center md:gap-3 gap-0 ' >Turning idea into impact <span className='rounded-[55px] pt-2 pb-2 md:text-5xl bg text-2xl -md:mt-4 mt-[.5rem] block md:w-[21%] w-[100%] text-center ' ><span className='cursive' ref={typedRef} ></span></span> </h1>
        <div className='bg w-full md:rounded-[35px] rounded-[15px] xl:h-[58%] h-[40vh] mt-[5%] relative ' >
          <Scene/>
          <div className="absolute md:bg-white bg-[#F7F6F6] md:w-[25%] md:h-[50%] h-[65%] md:bottom-0 md:right-0 -bottom-[70%] radius rounded-[15px] p-[1.3rem] pb-[.5rem] text-[1rem] ">
            <p className='md:mb-6 mb-3 xl:text-[1.24vw] ' >Delivering efficiency, innovation, and impact through product leadership and AI automation</p>
            <p onClick={() => handleScroll(aboutRef)} className='bg p text-sm xl:text-[1.3vw] md:w-fit block w-full text-center cursor-pointer md:mt-0 mt-6 '  >Discover More</p>
          </div>
          {/* Curves */}
          <div className="bg-white absolute bottom-[50%] right-0 w-[5%] h-[15%] z-20 md:flex hidden ">
            <div className="bg-black w-full h-full rounded-br-[55px] "></div>
          </div>
          <div className="bg-white absolute bottom-0 right-[25%] w-[5%] h-[15%] z-20 md:flex hidden ">
            <div className="bg-black w-full h-full rounded-br-[55px] "></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
