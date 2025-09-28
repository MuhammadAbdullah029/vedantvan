import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="w-full h-[95vh] p-[3rem] ">
            <div className="w-full h-[90%] bg rounded-bl-[65px] relative rounded-br-[65px] flex flex-col items-center justify-around ">
                <h1 className=' text-8xl white cursive ' >
                    Helping teams save <br /> time & achieve more.
                </h1>
                <div className='flex gap-4' >
                    <a className='white pt-2 pb-2 pl-6 pr-6 text-xl rounded-[35px] transform transition-all duration-300 bg-[#061B57] border-[1px] border-black hover:bg-transparent hover:border-white ' href="mailto:">Let's Talk</a>
                    <a className='white pt-2 pb-2 pl-6 pr-6 text-xl rounded-[35px] transform transition-all duration-300 border-[1px] hover:border-black bg-transparent border-white hover:bg-[#061B57] ' href="https://instagram.com">Follow Me</a>
                </div>
                <div className="w-full h-[6vh] bg-white absolute -top-5 rounded-bl-[25px] rounded-br-[25px] "></div>
            </div>
                <div className="w-full text-center mt-6 text-6xl font-bold  "> &copy; Vedant Vanmore </div>
        </div>
    </>
  )
}

export default Footer