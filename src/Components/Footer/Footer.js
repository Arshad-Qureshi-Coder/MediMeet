import React from 'react'

const Footer = () => {
  return (
    <div className="h-auto w-full">
  <div className="container  border-b border-gray-300 flex flex-wrap lg:flex-nowrap justify-between  mt-[12rem] pb-2">
     
     {/* Logo and Description  */}
    <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
      <img
        src="/images/assets/medi-meet-removebg.png"
        alt="Logo"
        className="w-50 h-30 mr-3"
      />
      <p className="pl-3">
        MediMeet is an innovative healthcare platform <br />
        designed to simplify the way patients connect <br />
        with doctors. The website offers a seamless <br />
        experience for booking appointments, browsing <br />
        through a directory of qualified medical professionals, <br />
        and accessing vital healthcare resources.
      </p>
    </div>

     {/* Company Section */}
    <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
      <h1 className="text-[25px] md:text-[20px]">COMPANY</h1>
      <div>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>
    </div>

     {/* Get in Touch Section  */}
    <div className="w-full lg:w-1/3">
      <h1 className="text-[25px] md:text-[20px]">GET IN TOUCH</h1>
      <div>
        <ul>
          <li>+0-000-000-000</li>
          <li>
            <a href="#" className="no-underline">
              medimeet@xyz.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

   {/* Footer  */}
  <div>
    <p className="text-center mt-3">
      Copyright 2024 @ MediMeet.dev - All Right Reserved.
    </p>
  </div>
</div>

  )
}

export default Footer