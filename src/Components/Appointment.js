import React from 'react';

const Appointment = () => {
  return (
    <>
      <div
  className="w-full bg-gray-200 mt-20 text-black font-semibold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75"
>
  <div className="flex flex-col md:flex-row items-center justify-evenly font-bold ">
    <div>
      <h1 className="text-black text-5xl font-bold pb-3 ">
        Book Appointment <br />
        With 100+ Trusted Doctors
      </h1>
      <button className="px-4 py-2 bg-customGreen text-white font-semibold rounded-lg shadow-md hover:bgCGreen hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Create Account
      </button>
    </div>

    {/* Outer and inner border structure */}
    <div
      className="relative hidden md:block right-[-4%] w-[30rem] h-[30rem] rounded-full p-1 border-[30px] border-gray-300 shadow-lg  "
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
  </div>
</div>

    </>
  );
  
};

export default Appointment;
