import React from 'react'
import { assets } from '../../assets/assets';

const About = () => {
  return (
    // #ecfbf8   #d7f7f0

    <div className=" container mx-auto px-4 py-16">
      
        <h1 className="text-3xl text-gray-500  mb-5">About<span className='font-bold text-customGreen'> MediMeet</span></h1>
        <div className=" bg-[#ecfbf8] shadow-md rounded-lg">
      {/* About Us Section */}
      <div className="relative flex flex-col bg-[#ecfbf8]  md:flex-row bg-[#cbf4ec] justify-between items-center max-w-6xl mx-auto  overflow-hidden">
        {/* Images Section */}
        <div className=" flex flex-col justify-center items-center mt-6 md:mt-0 md:items-end md:w-1/2 animate__animated animate__fadeInLeft"
          style={{ animationDuration: '1s' }}
        >
         
          <img
            src={assets.about_us}
            alt="About Us"
            className="  "
          />
        </div>

        {/* Description Section */}
        <div className="p-4 md:w-1/2 animate__animated animate__fadeInRight"
        style={{ animationDuration: '1s' }}
        >
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            MediMeet is a revolutionary healthcare platform connecting patients with qualified doctors seamlessly. Our mission is to simplify healthcare access, making it easier for you to find the right doctor, book appointments, and manage your healthcare needs efficiently.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe in empowering individuals to take control of their health. MediMeet provides a user-friendly platform with a wide range of features, including online consultations, appointment scheduling, and access to medical information.
          </p>
        </div>
      </div>
    </div>

      <div className="mt-16 ">
        <h2 className="text-2xl font-bold mb-5">Why Choose <span className='font-bold text-customGreen'> MediMeet </span>?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="bg-gray-100 p-16 rounded-lg border shadow bg-[#ecfbf8] hover:bg-[#d1f2eb] ">
            {/* <AiOutlineHeart className="text-green-500 text-2xl mb-4" /> */}
            <h3 className="text-lg font-semibold mb-2">Patient-Centric</h3>
            <p className="text-gray-700">We prioritize your needs and strive to provide the best possible healthcare experience.</p>
          </div>
          <div className="bg-gray-100 p-16 rounded-lg border shadow bg-[#fbeee6] hover:bg-[#d6eaf8]">
            {/* <i className="fas fa-user-md text-green-500 text-2xl mb-4"></i>  */}
            {/* Replace with a relevant icon */}
            <h3 className="text-lg font-semibold mb-2">Expert Doctors</h3>
            <p className="text-gray-700">Access a wide network of qualified and experienced doctors.</p>
          </div>
          <div className="bg-gray-100 p-16 rounded-lg border shadow bg-[#ebf5fb] hover:bg-[#e8daef]">
            {/* <i className="fas fa-calendar-check text-green-500 text-2xl mb-4"></i> */}
            {/* Replace with a relevant icon */}
            <h3 className="text-lg font-semibold mb-2">Easy Appointments</h3>
            <p className="text-gray-700">Book appointments quickly and easily with just a few clicks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About