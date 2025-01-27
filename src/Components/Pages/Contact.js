import React from 'react'
import { assets } from '../../assets/assets'

const Contact = () => {
  return (
    <section className='bg-white'>
      <div className=' w-full text-center text-[50px] text-gray-600  p-5'>
        <p >Contact <span className='font-semibold text-customGreen'>Us</span></p>

      </div>
      <div className="flex flex-wrap w-auto m-5 justify-evenly items-center">
        {/* Image Section with Fade-In-Left Animation */}
        <div
          className="lg:w-[40rem] w-full animate__animated animate__fadeInLeft"
          style={{ animationDuration: '1s' }}
        >
          <img
            src={assets.contact_image}
            className="w-full shadow-lg rounded-lg"
            alt="Contact"
          />
        </div>

        {/* Contact Information Section with Fade-In-Right Animation */}
        <div
          className=" p-8 text-gray-800 lg:w-[40%] w-full animate__animated animate__fadeInRight"
          style={{ animationDuration: '1s' }}
        >
          <h1 className="text-2xl font-bold text-customGreen mb-4">OUR OFFICE</h1>
          <p className="text-base leading-relaxed mb-4">
            00000 Willms Station<br />
            Suite 000, Washington, USA
          </p>
          <p className="text-base mb-6">
            <span className="block">Tel: (000) 000-0000</span>
            <span className="block">
              Email:{" "}
              <a
                href="mailto:greatstackdev@gmail.com"
                className="text-customGreen underline hover:text-green-600"
              >
                medimeet@xyz.com
              </a>
            </span>
          </p>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            CAREERS AT MEDIMEET
          </h2>
          <p className="text-base leading-relaxed mb-6">
            Learn more about our teams and job openings.
          </p>
          {/* <button className="bg-customGreen text-white px-6 py-2 rounded shadow-md hover:bg-green-600 transition duration-300">
      Explore Jobs
    </button> */}
          <button
            class="relative inline-flex items-center justify-center px-3.5 py-2.5 overflow-hidden font-medium text-customGreen transition duration-300 ease-out border-2 border-customGreen rounded-lg shadow-md group">
            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-customGreen group-hover:translate-x-0 ease">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span
              class="absolute flex items-center text-base font-semibold justify-center w-full h-full text-customGreen transition-all duration-300 transform group-hover:translate-x-full ease">Explore Jobs</span>
            <span class="relative text-base font-semibold invisible">Explore Jobs</span>
          </button>
        </div>
      </div>

    </section>
  )
}

export default Contact