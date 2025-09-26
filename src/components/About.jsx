import React from 'react'
import TextEff from './TextEff'

const About = () => {
  return (
    <>
       <div className="w-[100%] h-[100vh] p-[3rem] ">
        <div className="w-[100%] h-[100%] border-[1px] border-[#c5c4c4] rounded-[25px] flex items-center justify-between p-[1vw] ">
          <div className="left w-[49%] h-[100%] rounded-[15px] overflow-hidden ">
            <img className='w-[65%] h-full object-cover rounded-[15px] m-auto ' src="src/assets/Dev.jpg" alt="" />
          </div>
          <div className="right w-[49%] h-[100%] rounded-[15px] flex flex-col justify-between p-[1rem] ">
            <h1 className='text-4xl font-bold ' >About Me</h1>
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