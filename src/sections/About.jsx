import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DevImg from '../assets/Dev_1-min.jpg'
import useScrollAnimation from '../components/useScrollAnimation.js'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const headingRef = useRef(null)

  useScrollAnimation(headingRef)

  return (
    <>
      <div className="w-[100%] xl:h-[80vh] md:h-[100vh]  md:p-[3rem] p-[1rem] pt-[1rem] mt-4 ">
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
              <div className="texteff w-[95%] ">
                          <p>Hi, I’m Vedant</p>
                          <p>I bring over 8 years of experience in product management, AI automation, project management, social media management, faceless content creation, operations, and technical customer service. Over the years, I’ve launched new features, led large projects from start to finish, and built and supported more than 100 automation workflows that saved teams over 52,000 hours annually. I love solving challenges, learning new tools quickly, and finding smarter ways to get work done. At the end of the day, I’m happiest when I’m helping teams and clients move faster, stress less, and hit their goals with ease.</p>
              
                      </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About
