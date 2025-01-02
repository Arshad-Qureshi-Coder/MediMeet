import React from 'react'

const Footer = () => {
  return (
//     <div className="h-auto w-full bg-[#eaecee] p-1 mt-[100px]">
//   <div className="container  border-b border-gray-300 flex flex-wrap lg:flex-nowrap justify-between  mt-[12rem] pb-2">
     
//      {/* Logo and Description  */}
//     <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
//       <img
//         src="/images/assets/medi-meet-removebg.png"
//         alt="Logo"
//         className="w-50 h-30 mr-3"
//       />
//       <p className="pl-3">
//         MediMeet is an innovative healthcare platform <br />
//         designed to simplify the way patients connect <br />
//         with doctors. The website offers a seamless <br />
//         experience for booking appointments, browsing <br />
//         through a directory of qualified medical professionals, <br />
//         and accessing vital healthcare resources.
//       </p>
//     </div>

//      {/* Company Section */}
//     <div className="w-full  lg:w-1/3 mb-6 lg:mb-0">
//       <h1 className="text-[25px] text-center md:text-[20px]">COMPANY</h1>
//       <div className='flex justify-center items-center'>
//         <ul >
//           <li>Home</li>
//           <li>About us</li>
//           <li>Delivery</li>
//           <li>Privacy policy</li>
//         </ul>
//       </div>
//     </div>

//      {/* Get in Touch Section  */}
//     <div className="w-full lg:w-1/3">
//       <h1 className="text-[25px] text-center md:text-[20px]">GET IN TOUCH</h1>
//       <div className='flex justify-center items-center'>
//         <ul>
//           <li>+0-000-000-000</li>
//           <li>
//             <a href="#" className="no-underline">
//               medimeet@xyz.com
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>

//    {/* Footer  */}
//   <div>
//     <p className="text-center mt-3">
//       Copyright 2024 @ MediMeet.dev - All Right Reserved.
//     </p>
//   </div>
// </div>

<footer className="h-auto w-full bg-[#eaecee] p-6 mt-[10rem]">
<div className="container border-b border-gray-300 flex flex-wrap lg:flex-nowrap justify-between items-start max-w-6xl mx-auto pb-6">
  {/* Logo and Description */}
  <div className="w-full lg:w-1/3 mb-6 lg:mb-0  lg:text-left">
    <img
      src="/images/assets/medi-meet-removebg.png"
      alt="Logo"
      className="w-32 h-auto  lg:mx-0 mb-4"
    />
    <p className="text-gray-700 leading-relaxed">
      MediMeet is an innovative healthcare platform designed to simplify the way patients connect with doctors. The website offers a seamless experience for booking appointments, browsing through a directory of qualified medical professionals, and accessing vital healthcare resources.
    </p>
  </div>

  {/* Company Section */}
  <div className="w-full lg:w-1/3 mb-6 lg:mb-0  md:text-left">
    <h1 className="text-xl  lg:text-center font-bold text-gray-800 mb-4 md:text-left">COMPANY</h1>
    <ul className="text-gray-700 lg:ml-[8.5rem]  space-y-2">
      <li><a href="#" className="hover:underline">Home</a></li>
      <li><a href="#" className="hover:underline">About us</a></li>
      <li><a href="#" className="hover:underline">Delivery</a></li>
      <li><a href="#" className="hover:underline">Privacy policy</a></li>
    </ul>
  </div>

  {/* Get in Touch Section */}
  <div className="w-full lg:w-1/3  lg:text-left">
    <h1 className="text-xl font-bold lg:text-center text-gray-800 mb-4 md:text-left">GET IN TOUCH</h1>
    <ul className="text-gray-700 lg:ml-[8rem] space-y-2">
      <li>+0-000-000-000</li>
      <li>
        <a href="mailto:medimeet@xyz.com" className="no-underline hover:underline text-blue-600">
          medimeet@xyz.com
        </a>
      </li>
    </ul>
  </div>
</div>

<div>
  <p className="text-center text-gray-600 mt-6">
    Copyright 2024 @ MediMeet.dev - All Rights Reserved.
  </p>
</div>
</footer>

  )
}

export default Footer