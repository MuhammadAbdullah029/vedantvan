import React from 'react'
import TextEff from './TextEff'
import DevImg from '../assets/Dev.jpg'

const About = () => {
  return (
    <>
       <div className="w-[100%] h-[105vh] md:p-[3rem] p-[1rem] pt-[2rem] mt-4 ">
        <div className="w-[100%] h-[100%] border-[1px] border-[#F7F6F6] md:rounded-[25px] rounded-[15px] flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between p-[1vw] ">
          <div className="left md:w-[49%] w-[100%] md:h-[100%] h-[50%] rounded-[15px] overflow-hidden ">
            <img className='md:w-[65%] w-[95%] h-full object-cover rounded-[10px] m-auto ' src={DevImg} alt="" />
          </div>
          <div className="right md:w-[49%] w-[100%] md:h-[100%] h-[50%] rounded-[15px] flex flex-col justify-between p-[1rem] pt-4 ">
            <h1 className='md:text-[5vw] text-4xl font-bold ' >About Me</h1>
            <div className="w-full">
              <TextEff/>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default About