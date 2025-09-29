import React from 'react'

const Navbar = ({ aboutRef, skillsRef, workRef, servicesRef }) => {
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='w-[94%] fixed top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 pl-6 pr-6 md:bg-transparent bg-[#F7F6F6] rounded-[35px] flex items-center justify-between z-50'>
      <h1 className='md:text-3xl text-xl '>Vedant Vanmore</h1>
      <div className='md:flex hidden gap-8 text-lg font-medium bg-[#F7F6F6] rounded-[35px] p-4 pl-6 pr-6'>
        <p className='cursor-pointer nh' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</p>
        <p className='cursor-pointer nh' onClick={() => handleScroll(aboutRef)}>About</p>
        <p className='cursor-pointer nh' onClick={() => handleScroll(skillsRef)}>Skills</p>
        <p className='cursor-pointer nh' onClick={() => handleScroll(workRef)}>Work</p>
        <p className='cursor-pointer nh' onClick={() => handleScroll(servicesRef)}>Services</p>
      </div>
      <a href="mailto:vedantvanmore111@gmail.com" className='bg btn md:text-lg' >Let's Talk</a>
    </nav>
  )
}

export default Navbar
