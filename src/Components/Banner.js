import React from 'react'

const Banner = () => {
  return (
    <div className=' bg-gradient-to-r from-[#e3fcef] to-[#17bf8f] text-white font-semibold rounded-lg  hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75'>
        <div className='flex items-center justify-between mx-5 '>

          <div className='font-bold'>
            <h1 className='text-gray-500'>
              <span className='text-blue-500'>Book</span> Appointment With
              <span className='text-blue-500'> Trusted Doctors</span>
            </h1>
            <p className='text-gray-500'>
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
            <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Book appointment
            </button>
          </div>
          <div className='mt-5 '>
            <img src='/images/assets/assets_frontend/header_img.png' alt='banner-doctors' />
          </div>
        </div>
      </div>
  )
}

export default Banner