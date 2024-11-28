import React from 'react'

const Card = () => {
  return (
    <div class="max-w-sm mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
   {/* Image Section  */}
  <img class="w-full h-48 object-cover" src="https://via.placeholder.com/300" alt="Card Image"/>

   {/* Card Content  */}
  <div class="p-6">
    <h2 class="text-xl font-semibold text-gray-800">Card Title</h2>
    <p class="mt-3 text-gray-600">
      This is a brief description of the card content. It provides a concise summary of what the card is about.
    </p>

     {/* Button  */}
    <div class="mt-5">
      <button class="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Learn More
      </button>
    </div>
  </div>
</div>

  )
}

export default Card