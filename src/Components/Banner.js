import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap px-6 md:px-10 lg:px-20 bg-gradient-to-r from-[#e3fcef] to-[#17bf8f] text-white font-semibold rounded-lg  hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75'>
      {/* -------left-side------ */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-gray-500 font-bold leading-tight md:leading-tight lg:leading-tight '>
          <span className='text-blue-500'>Book</span> Appointment<br/> With
          <span className='text-blue-500'> Trusted Doctors</span>
          {/* Book Appointment
          With Trusted Doctors */}
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-gray-500 text-sm font-light' >
          <img className='w-28' src={assets.group_profiles} alt='' />
          <p className='text-gray-900'> Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block' />schedule your appointment hassle-free.</p>
        </div>
        <a href='#speciality' class=" flex items-center no-underline gap-2 px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ">
          Book appointment <img className='w-3 filter invert' src={assets.arrow_icon} alt='' />
        </a>
      </div>

      {/* ------right-side------ */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt='' />
      </div>
    </div>
    // <div className=' bg-gradient-to-r from-[#e3fcef] to-[#17bf8f] text-white font-semibold rounded-lg  hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75'>
    //     <div className='flex items-center justify-between mx-5 '> 
    //       <div className='font-bold'>
    //         <h1 className='text-gray-500'>
    //           <span className='text-blue-500'>Book</span> Appointment With
    //           <span className='text-blue-500'> Trusted Doctors</span>
    //         </h1>
    //         <p className='text-gray-500'>
    //           Simply browse through our extensive list of trusted doctors,
    //           schedule your appointment hassle-free.
    //         </p>
    //         <button  class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
    //           Book appointment
    //         </button>
    //       </div>
    //       <div className='mt-5 '>
    //         <img src='/images/assets/assets_frontend/header_img.png' alt='banner-doctors' />
    //       </div>
    //     </div>
    //   </div>
  )
}

export default Banner