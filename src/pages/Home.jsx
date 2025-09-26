import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <>
      <nav className='w-[90%] fixed top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 pl-6 pr-6 bg-[#F7F6F6] rounded-[35px] flex items-center justify-between z-50 ' >
        <h1 className='text-3xl ' >Vedant Van</h1>
        <a href="mailto:" className='bg-[#000] btn text-lg ' >Contact</a>
      </nav>
      <Hero/>
      <About/>
      <div className="w-[100%] h-[100vh] p-[3rem] ">
        <div className="w-[100%] h-[100%] bg-[#F7F6F6] rounded-[25px] flex items-center justify-between p-[1vw] ">
          <div className="left w-[49%] h-[100%] rounded-[15px] flex flex-col justify-between p-[1rem] ">
            <h1 className='text-4xl font-bold ' >Skills</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptatum cum temporibus totam! Quidem veniam animi accusamus provident reiciendis, ab consectetur cum suscipit voluptates saepe officiis repellat, ratione quibusdam dicta?</p>
          </div>
          <div className="right w-[49%] h-[100%] bg-amber-200 rounded-[15px] "></div>
        </div>
      </div>
    </>
  )
}

export default Home