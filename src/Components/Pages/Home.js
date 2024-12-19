import React from 'react'
import Banner from '../Banner'
import Speciality from '../Speciality'
import TopDoctor from '../TopDoctor'
import Appointment from '../Appointment'

const Home = () => {
  return (
    <div className=''>
      {/* Banner */}
      <Banner/>
      {/* Find by Speciality */}
      <Speciality/>
      {/*  Book Top Doctors */}
     <TopDoctor/>
      {/* Book appointment with 100+ dr. */}
     <Appointment/>
     {/*  */}




    </div>
  )
}

export default Home