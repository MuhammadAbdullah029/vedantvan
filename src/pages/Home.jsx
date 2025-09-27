import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills.jsx'
import Tools from '../components/Tools.jsx'

const Home = () => {
  return (
    <>
      <nav className='w-[94%] fixed top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 pl-6 pr-6 bg-[#F7F6F6] rounded-[35px] flex items-center justify-between z-50 ' >
        <h1 className='text-3xl ' >Vedant Vanmore</h1>
        <a href="mailto:" className='bg-[#000] btn text-lg ' >Contact</a>
      </nav>
      <Hero/>
      <About/>
      <Skills/>
      <Tools/>
    </>
  )
}

export default Home