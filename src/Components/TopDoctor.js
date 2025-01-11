import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from './Context/AppContext';

const TopDoctor = () => {

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className='container flex flex-col items-center bg-[#f8f9f9] mt-[50px] p-4 gap-4 my-16 text-gray-900 '>
      <h1 className='text-3xl font-medium mb-0'>Top Doctors to Book</h1>
      <p className='sm:w1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div key={index} onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500" >
            <img src={item.image} alt="Card Image" className="bg-blue-50" />
            <div className="px-3 ">
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full mb-0 ' ></p><p className='mb-0'>Avalaible</p>
              </div>
              <p className='text-gray-900 mb-0 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600  text-sm '>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <button onClick={()=>{ navigate('/doctors'); }} 
    className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>
      more
      </button> */}

      <button onClick={() => { navigate('/doctors') }}
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-full group bg-gradient-to-br from-violet-600 to-teal-400 group-hover:from-indigo-600 group-hover:to-indigo-500 hover:text-white">
        <span
          class="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
          Button
        </span>
      </button>
    </div>
  )
}

export default TopDoctor