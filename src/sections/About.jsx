import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextEff from '../components/TextEff.jsx'
import DevImg from '../assets/Dev_1-min.jpg'
import useScrollAnimation from '../components/useScrollAnimation.js'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const headingRef = useRef(null)

  useScrollAnimation(headingRef)

  return (
    <>
      <div className="w-[100%] xl:h-[95vh]  md:p-[3rem] p-[1rem] pt-[1rem] mt-4 ">
        <div className="w-[100%] h-[100%] border-[1px] border-[#F7F6F6] md:rounded-[25px] rounded-[15px] flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between md:p-[1vw] pt-4 ">

          {/* Left Side (Image) */}
          <div className="left md:w-[49%] w-[100%] md:h-[100%] h-[50%] rounded-[15px] overflow-hidden ">
            <img
              className="md:w-[65%] w-[95%] h-full object-cover rounded-[10px] m-auto"
              src={DevImg}
              alt=""
            />
          </div>

          {/* Right Side (Text + Heading) */}
          <div className="right md:w-[49%] w-[100%] md:h-[100%] h-[50%] rounded-[15px] flex flex-col justify-between p-[1rem] pt-4 ">
            <h1
              ref={headingRef}
              className="md:text-[5vw] text-4xl font-bold"
            >
              About Me
            </h1>
            <div className="w-full md:mt-0 mt-8">
              <TextEff />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About
