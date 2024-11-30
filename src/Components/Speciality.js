import React from 'react'

const Speciality = () => {
  return (
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
  )
}

export default Speciality