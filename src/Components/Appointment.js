import React from 'react';
import { assets } from '../assets/assets';

const Appointment = () => {
  return (
    <>
      <div
        className="w-full bg-cover  mt-[100px] text-black font-semibold  hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75"
        style={{ backgroundImage: ` url(${assets.banner_bg_img})` }}
      >
        {/* bg-gradient-to-r from-gray-200 to-gray */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly font-bold ">
          {/* Left-side text */}
          <div className='p-5 m-3'>
            <p className="text-4xl ml-[80px] sm:text-5xl md:text-5xl md:mt-[50px] lg:text-5xl text-gray-900 font-bold leading-tight md:leading-tight lg:leading-tight ">
              <span className='text-[#17bf8f] '>Book</span> Appointment <br />
              With <span className='text-[#17bf8f]'>100+</span> Trusted Doctors
            </p>
            {/* <button className="no-underline gap-2 px-8 py-3 ml-[80px] bg-[#17bf8f] text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ">
              Create Account
            </button> */}

            {/* <button class="relative rounded px-5 py-2.5 overflow-hidden group bg-indigo-500 relative hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300">
<span
class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative text-base font-semibold">Button Text</span>
</button> */}
            <button
              class="relative h-full inline-flex items-center justify-start ml-[80px] px-6 py-3 overflow-hidden font-medium transition-all bg-[#48c9b0] rounded-xl group">
              <span
                class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-customGreen rounded group-hover:-mr-4 group-hover:-mt-4">
                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span
                class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-customGreen rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span
                class="relative w-full text-base font-semibold text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Create Account</span>
            </button>
          </div>

          {/* Right-side div */}
          <div >
            {/* Outer and Inner div hidden on small and medium devices */}
            <div
              className="relative hidden lg:block w-[30rem] h-[30rem] rounded-full p-1 border-[30px] border-gray-300 shadow-lg"
            >
              {/* Inner border div */}
              <div
                className="absolute inset-0 bg-bgCGreen rounded-full border-[20px] border-white w-full h-full"
              >
                {/* Image inside the circle */}
                <img
                  src="/images/assets/assets_frontend/appointment_img.png"
                  alt="doctors-appointment"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[33rem] left-1/2 top-[44%]"
                />
              </div>
            </div>
            {/* Image only on small and medium devices */}
            {/* <div className="flex justify-end items-center lg:hidden">
    <img
      src="/images/assets/assets_frontend/appointment_img.png"
      alt="doctors-appointment"
      className="w-1/2"
    />
    </div> */}

          </div>


        </div>
      </div>
    </>
  );


};

export default Appointment;
