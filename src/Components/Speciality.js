import React, { useRef, useState } from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef();

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const itemWidth = container.firstChild.offsetWidth + 24; // Adjust for item width and gap

    if (direction === "right") {
      container.scrollBy({ left: itemWidth, behavior: "smooth" });

      // Reorder after scroll completes
      setTimeout(() => {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          const firstItem = container.firstChild;
          container.appendChild(firstItem.cloneNode(true));
          container.removeChild(firstItem);
          container.scrollLeft -= itemWidth;
        }
      }, 400); // Matches the scroll animation duration
    } else if (direction === "left") {
      if (container.scrollLeft <= 0) {
        const lastItem = container.lastChild;
        container.prepend(lastItem.cloneNode(true));
        container.removeChild(lastItem);
        container.scrollLeft += itemWidth; // Adjust scroll position
      }

      container.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center py-16 bg-gray-100 text-gray-800" id="speciality">
      {/* Section Header */}
      <h1 className="text-4xl font-bold text-gray-900">Find by Speciality</h1>
      <p className="mt-4 text-center text-gray-600 sm:w-2/3">
        Explore our wide range of trusted doctors by specialty. Find the perfect match and book your appointment with ease.
      </p>

      {/* Slider Section */}
      <div className="relative w-full max-w-6xl mt-10">
        {/* Left Arrow */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 text-gray-700 bg-light rounded-full shadow border flex items-center justify-center hover:bg-customGreen hover:text-white transition duration-300 z-10"
          onClick={() => handleScroll("left")}
        >
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0001 17.9996L8.99988 11.9994L15.0037 5.99561" stroke="black" stroke-width="null" stroke-linecap="round" stroke-linejoin="round" class="my-path"></path>
          </svg> {/* Left Arrow */}
        </button>

        {/* Right Arrow */}
        <button
          className="absolute right-[-25px] top-1/2 -translate-y-1/2 w-12 h-12 text-gray-700 bg-light rounded-full shadow border flex items-center justify-center hover:bg-customGreen hover:text-white transition duration-300 z-10"
          onClick={() => handleScroll("right")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00378 5.99561L15.004 11.9959L9.00024 17.9996" stroke="black" stroke-width="null" stroke-linecap="round" stroke-linejoin="round" class="my-path"></path>
            </svg> {/* Right Arrow */}
        </button>

        {/* Items Container */}
        <div
          ref={containerRef}
          className="flex gap-6 px-8 overflow-x-scroll scrollbar-hide w-full"
        >
          {specialityData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md w-48 flex-shrink-0 transform transition-transform duration-500"
            >
              <img
                src={item.image}
                alt={item.speciality}
                className="w-20 h-20 object-cover rounded-full mb-4 border-2 border-gray-200"
              />
              <p className="text-center font-semibold text-gray-800">{item.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Speciality




 // <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
    //   <h1 className='text-3xl font-medium'>Find by Speciality</h1>
    //   <p className='sm:w-1/3 text-center text-sm'>
    //     Simply browse through our extensive list of trusted doctors,
    //     <br /> schedule your appointment hassle-free.
    //   </p>

    //   <div className='relative w-full overflow-hidden'>
    //     <button
    //       className='absolute right-[90px] w-10 text-customGreen text-lg z-10 bg-white p-2 rounded-full shadow hover:bg-customGreen hover:text-white'
    //       onClick={() => handleScroll('left')}
    //     >
    //       &#8592; 
    //     </button>

    //     <button
    //       className='absolute right-9 w-10 text-customGreen text-lg z-10 bg-white p-2 rounded-full shadow hover:bg-customGreen hover:text-white '
    //       onClick={() => handleScroll('right')}
    //     >
    //       &#8594; 
    //     </button>

    //     <div
    //       ref={containerRef}
    //       className='flex sm:justify-center gap-4 pt-5 w-full overflow-x-scroll scrollbar-hide'
    //     >
    //       {specialityData.map((item, index) => (
    //         <Link
    //           onClick={() => window.scrollTo(0, 0)}
    //           className='flex flex-col items-center border p-4 rounded text-gray-700 font-bold text-xs no-underline cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
    //           key={index}
    //           to={`/doctors/${item.speciality}`}
    //         >
    //           <img className='w-16 sm:w-24 mb-2' src={item.image} alt='' />
    //           <p>{item.speciality}</p>
    //         </Link>
    //       ))}
    //     </div>

      
    //   </div>
    // </div>