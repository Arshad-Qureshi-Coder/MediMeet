import React from 'react';


const Header = () => {
  return (
    <>
      <nav className=" text-white ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/assets/medi-meet-removebg.png"
            alt="Logo"
            className="w-50 h-30 mr-3"
          />
          
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 ">
          <li>
            <a href="#home" className="hover:text-customGreen text-xl  no-underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-customGreen text-xl  no-underline ">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-customGreen text-xl  no-underline bg-customGreen ">
              Contact
            </a>
          </li>
        </ul>

        {/* Profile Image */}
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
