import React from 'react';

const Appointment = () => {
  return (
    <>
      <div
        className="w-full bg-gradient-to-r from-gray-200 to-gray shadow mt-20 text-black font-semibold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75"
      >
        <div className="flex flex-col lg:flex-row items-center justify-evenly font-bold ">
          {/* Left-side text */}
          <div className='p-5 m-3'>
            <h1 className="text-black text-5xl font-bold ">
              Book Appointment <br />
              With 100+ Trusted Doctors
            </h1>
            <button className="px-4 py-2 mt-3 bg-customGreen text-white font-semibold rounded-lg shadow-md hover:bgCGreen hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
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
