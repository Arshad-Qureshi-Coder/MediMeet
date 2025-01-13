import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from './Context/AppContext';

const TopDoctor = () => {

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <section className='mt-[100px] mb-5'>
      {/* <h1 className='text-3xl font-medium mb-0'>Top Doctors to Book</h1> */}
      <h1 className="text-5xl  text-center font-bold text-gray-900">Top <span className="bg-gradient-to-r from-customGreen to-indigo-400 bg-clip-text text-transparent hover:from-indigo-400 hover:to-customGreen">
      Doctors
      </span> to Book</h1>
      <p className="lg:w-full mt-3 text-center font-semibold text-gray-600 mb-3 md:text-center sm:w-full">
      Simply browse through our extensive list of trusted doctors.
      </p>
      {/* <p className='sm:w1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p> */}
    <div className=' flex flex-col items-center bg-[#F2F6F6] mt-[30px] p-4 gap-4 my-16 text-gray-900 '>
      <div className=' container w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div key={index} onClick={() => navigate(`/appointment/${item._id}`)}
            className=" bg-white border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 hover:shadow" >
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

{/* <button
  onClick={() => {
    navigate('/doctors');
  }}
  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold text-gray-600 rounded-full bg-gradient-to-br from-violet-600 to-teal-400 hover:from-indigo-600 hover:to-indigo-500"
>
  <span
    class="relative py-2 px-5 transition-all duration-75 ease-in bg-gradient-to-br from-white via-gray-200 to-gray-300 rounded-full group-hover:from-indigo-600 group-hover:via-indigo-500 group-hover:to-teal-400 text-gray-600 hover:text-white"
  >
    Button
  </span>
</button> */}

<button onClick={() => {
    navigate('/doctors');
  }} type="button"
class="py-2.5 px-6 text-sm rounded-full bg-gradient-to-br from-violet-600 to-teal-400 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr ">
  more
</button>


    </div>

    </section>
  )
}

export default TopDoctor