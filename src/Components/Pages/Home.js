import React from 'react'

const Home = () => {
  return (
    <div className=''>
      {/* Banner */}
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

      {/* Find by Speciality */}
      <div className='py-5 mt-5'>
        <div className='text-center'>
          <h1>
            Find by Speciality
          </h1>
          <p>Simply browse through our extensive list of trusted doctors,
            <br /> schedule your appointment hassle-free.</p>
        </div>
        <div className='flex items-center justify-center space-x-4 mt-5'>
          
          <div className="text-center hover:scale-105 transition-transform duration-300 ">
            <img
              src="/images/assets/assets_frontend/General_physician.svg" alt="General-Physician"
              className="h-24 mx-auto "
            />
            <p className="text-sm mt-2 font-bold">General Physician</p>
          </div>
          <div className="text-center hover:scale-105 transition-transform duration-300 ">
            <img
              src='/images/assets/assets_frontend/Gynecologist.svg' alt='Gynecologist'
              className="h-24 mx-auto "
            />
            <p className="text-sm mt-2 font-bold">Gynecologist</p>
          </div>
          <div className="text-center hover:scale-105 transition-transform duration-300 ">
             <img src='/images/assets/assets_frontend/Dermatologist.svg' alt='Dermatologist'
              className="h-24 mx-auto "
            />
            <p className="text-sm mt-2 font-bold">Dermatologist</p>
          </div>
          <div className="text-center hover:scale-105 transition-transform duration-300 ">
            <img
             src='/images/assets/assets_frontend/Pediatricians.svg' alt='Pediatricians'
              className="h-24 mx-auto "
            />
            <p className="text-sm mt-2 font-bold">Pediatricians</p>
          </div>
          <div className="text-center hover:scale-105 transition-transform duration-300 ">
            <img
              src='/images/assets/assets_frontend/Neurologist.svg' alt='Neurologist'
              className="h-24 mx-auto "
            />
            <p className="text-sm mt-2 font-bold">Neurologist</p>
          </div>
          <div className="text-center hover:scale-105 transition-transform duration-300 ">
            <img
             src='/images/assets/assets_frontend/Gastroenterologist.svg' alt='Gastroenterologist'
              className="h-24 mx-auto "
            />
            <p className="text-sm mt-2 font-bold">Gastroenterologist</p>
          </div>
        </div>
      </div>

      {/* Book appointment with 100+ dr. */}
      <div className=' text-black font-semibold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75'
      style={{
        width:'100%',
        backgroundColor:'#e9ecef',
        marginTop:'5rem'
      }}>
  <div className='flex items-center justify-evenly '>
    <div className='font-bold'>
      <h1 className='text-black font-bold pb-5'>
        Book Appointment <br />With 100+ Trusted Doctors
      </h1>
      <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Create Account
      </button>
    </div>

    {/* Outer and inner border structure */}
    <div
      className="relative"
      style={{
        width: '30rem',
        height: '30rem',
        borderRadius: '50%',
        padding: '5px', 
        border: '30px solid #cbcbcb', 
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      }}
    >
      {/* Inner border div */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor:'#71d5b8',
          border: '20px solid #fff', 
          width: '100%',
          height: '100%',
        }}
      >
        {/* Image inside the circle */}
        <img
          src="/images/assets/assets_frontend/appointment_img.png"
          alt="doctors-appointment"
          className="absolute inset-0  transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '34rem',
            height: '34rem', 
            left: '50%',
            top: '46%'         
          }}
        />
      </div>
    </div>
  </div>
</div>

{/* Book Doctors */}
<div>
  <div>
    
  </div>
</div>


    </div>
  )
}

export default Home