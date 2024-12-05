import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>   
          <h1 className='text-3xl font-medium'> Find by Speciality</h1>
          <p className='sm:w1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors,
            <br /> schedule your appointment hassle-free.</p>   
        {/* <div className='flex items-center justify-center space-x-4 mt-5'>

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
        </div> */}
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
          {specialityData.map((item, index)=>( 
            <Link onClick={()=>window.scrollTo(0,0)} className='flex flex-col items-center text-gray-700 font-bold text-xs no-underline cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
              <img className='w-16 sm:w-24 mb-2' src={item.image} alt=''/>
              <p>{item.speciality}</p>
            </Link>
          ))}
        </div>
      </div>
  )
}

export default Speciality