import React from 'react'
import { assets } from '../../assets/assets'

const Contact = () => {
  return (
    <section>
      <div className=' w-full text-center text-[50px] text-gray-600  p-5'>
          <p >Contact <span className='font-semibold text-customGreen'>Us</span></p>

      </div>
      <div className='flex flex-wrap w-auto m-5 justify-evenly items-center '>
        <div>
          <img src={assets.contact_image} className='lg:w-[40rem] md:w-full'/>
        </div>
        <div className="bg-gray-50 p-8  text-gray-800 md:text-left w-auto">
  <h1 className="text-2xl font-bold text-customGreen mb-4">OUR OFFICE</h1>
  <p className="text-base leading-relaxed mb-4">
    00000 Willms Station<br />
    Suite 000, Washington, USA
  </p>
  <p className="text-base mb-6">
    <span className="block">Tel: (000) 000-0000</span>
    <span className="block">Email: <a href="mailto:greatstackdev@gmail.com" className="text-customGreen underline">greatstackdev@gmail.com</a></span>
  </p>
  <h2 className="text-xl font-semibold text-gray-700 mb-4">CAREERS AT MEDIMEET</h2>
  <p className="text-base leading-relaxed mb-6">Learn more about our teams and job openings.</p>
  <button className="bg-customGreen text-white px-6 py-2 rounded shadow-md hover:bg-green-600 transition duration-300">
    Explore Jobs
  </button>
</div>

      </div>
    </section>
  )
}

export default Contact