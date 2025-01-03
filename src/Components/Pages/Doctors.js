import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const Doctors = () => {
  const {doctors,specialityData} = useContext(AppContext);
  const [filteredDoctors, setFilteredDoctors] = useState(doctors); 
  const navigate = useNavigate();

  const filterDoctors = (selectedSpeciality) => {
    if (selectedSpeciality === 'All') {
      setFilteredDoctors(doctors);
    } else {
      setFilteredDoctors(
        doctors.filter((doctor) => doctor.speciality === selectedSpeciality)
      );
    }
  };

  useEffect(() => {
    // Initial filter (optional)
    filterDoctors('All'); 
  }, [doctors]);

  return (
    <section class="container mx-auto px-4 py-10">
    {/* SPECIALITY */}
    <h2 class="text-2xl font-semibold mb-4">Specialities</h2>
    <div class="flex flex-wrap justify-center gap-2 ">
      {specialityData.map((item, index) => (
        <button
          key={index}
          class="text-gray-700 py-2 px-4 rounded-lg border border-blue-900 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-500 active:bg-gray-300"
          onClick={() => filterDoctors(item.speciality)}
        >
          {item.speciality}
        </button>
      ))}
    </div>
  
    {/* DOCTORS */}
    <h2 class="text-2xl font-semibold mt-8 mb-2">Doctors</h2>
    <div class="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'">
    {filteredDoctors.map((item, index)=>(
         <div key={index} onClick={()=>navigate(`/appointment/${item._id}`) } className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500" > 
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
  </section>
  )
}

export default Doctors