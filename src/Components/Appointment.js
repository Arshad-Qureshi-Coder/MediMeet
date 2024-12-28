import React from 'react';
import { assets } from '../assets/assets';

const Appointment = () => {
  return (
    <>
      <div
        className="w-full bg-cover  mt-20 text-black font-semibold  hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75"
        style={{ backgroundImage: `url(${assets.bg_hexa})` }}
      >
        {/* bg-gradient-to-r from-gray-200 to-gray */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly font-bold ">
          {/* Left-side text */}
          <div className='p-5 m-3'>
            <p className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold leading-tight md:leading-tight lg:leading-tight ">
              <span className='text-[#17bf8f]'>Book</span> Appointment <br />
              With <span className='text-[#17bf8f]'>100+</span> Trusted Doctors
            </p>
            <button className="no-underline gap-2 px-8 py-3 bg-[#17bf8f] text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ">
              Create Account
            </button>
          </div>
  
          {/* Right-side div */}
          <div>
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
 <div className="flex justify-end items-center lg:hidden">
    <img
      src="/images/assets/assets_frontend/appointment_img.png"
      alt="doctors-appointment"
      className="w-1/2"
    />
    </div>
 
</div>


        </div>
      </div>
    </>
  );
  
  
};

export default Appointment;
