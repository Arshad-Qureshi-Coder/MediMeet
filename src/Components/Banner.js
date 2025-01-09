import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    // bg-gradient-to-r from-[#e3fcef] to-[#17bf8f] shadow
    <div className='  w-full flex flex-col bg-cover   md:flex-row flex-wrap px-6 md:px-10 lg:px-20  text-white font-semibold   hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75 '
      style={{ backgroundImage: `linear-gradient(to right, #eaecee, rgba(234, 236, 238, 0)), url(${assets.banner_bg_img_1})` }}>
      {/* -------left-side------ */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-gray-500 font-bold leading-tight md:leading-tight lg:leading-tight '>
          <span className='text-[#17bf8f]'>Book</span> Appointment<br /> With
          <span className='text-[#17bf8f]'> Trusted Doctors</span>
          {/* Book Appointment
          With Trusted Doctors */}
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-gray-500 text-sm font-light' >
          <img className='w-28' src={assets.group_profiles} alt='' />
          <p className='text-gray-900'> Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block' />schedule your appointment hassle-free.</p>
        </div>
        <div className="flex justify-start sm:justify-center">
          {/* <a
    href="#speciality"
    className="flex items-center no-underline gap-2 px-8 py-3 bg-[#17bf8f] text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300 hover:ring hover:ring-green-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
  >
    Book appointment
    <img className="w-3 filter invert" src={assets.arrow_icon} alt="" />
  </a> */}

          <a
            href="#speciality"
            class="relative rounded no-underline px-4 py-2.5 overflow-hidden group bg-customGreen relative hover:bg-gradient-to-r hover:from-customGreen hover:to-indigo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300">
            <span
              class="absolute right-0 w-8 h-40 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative text-base font-semibold">Book appointment</span>
          </a>
        </div>

      </div>

      {/* ------right-side------ */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute border-b  bottom-0 h-auto rounded-lg' src={assets.header_img} alt='' />
      </div>
    </div>
  )
}

export default Banner