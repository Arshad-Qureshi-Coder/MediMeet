import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">About MediMeet</h1>
          <p className="text-lg text-gray-700 mb-6">
            MediMeet is a revolutionary healthcare platform connecting patients with qualified doctors seamlessly. Our mission is to simplify healthcare access, making it easier for you to find the right doctor, book appointments, and manage your healthcare needs efficiently.
          </p>
          <p className="text-lg text-gray-700">
            We believe in empowering individuals to take control of their health. MediMeet provides a user-friendly platform with a wide range of features, including online consultations, appointment scheduling, and access to medical information.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img 
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjUwIiBoZWlnaHQ9IjIwMCIgcj0iMCIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjZ2VjIj48L3JlY3Q+PC9zdmc+"></img> 
          {/* Replace with your AI-generated image URL or base64 encoded string */}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Why Choose MediMeet?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            {/* <AiOutlineHeart className="text-green-500 text-2xl mb-4" /> */}
            <h3 className="text-lg font-semibold mb-2">Patient-Centric</h3>
            <p className="text-gray-700">We prioritize your needs and strive to provide the best possible healthcare experience.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <i className="fas fa-user-md text-green-500 text-2xl mb-4"></i> 
            {/* Replace with a relevant icon */}
            <h3 className="text-lg font-semibold mb-2">Expert Doctors</h3>
            <p className="text-gray-700">Access a wide network of qualified and experienced doctors.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <i className="fas fa-calendar-check text-green-500 text-2xl mb-4"></i>
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