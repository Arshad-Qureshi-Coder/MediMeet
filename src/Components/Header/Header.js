import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='mx-4 sm:mx-[10%]'>
      <div className=" mx-auto flex items-center justify-center text-sm  py-4 px-6 mb-4 border-b border-b-gray-400">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/assets/medi-meet-removebg.png"
            alt="Logo"
            className="w-50 h-30 mr-3"
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex mx-auto flex items-center justify-between h-26 space-x-6"
          style={{marginBottom:'0 ', paddingLeft:'0'}}
        >
        {/* hidden md:flex mx-auto flex items-center justify-between  space-x-6 */}
          <li>
            <NavLink
              to="/"
              className="text-xl text-gray-900 no-underline hover:text-customGreen   "
              activeClassName="font-bold text-customGreen"
              exact
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctors"
              className="text-xl text-gray-900 no-underline hover:text-customGreen "
              activeClassName="font-bold text-customGreen"
            >
               DOCTORS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-xl text-gray-900 no-underline hover:text-customGreen "
              activeClassName="font-bold text-customGreen"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-xl text-gray-900 no-underline hover:text-customGreen "
              activeClassName="font-bold text-customGreen"
            >
              CONTACT
            </NavLink>
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

        <div className="flex items-center space-x-3">
          <button className="  no-underline gap-2 px-8 py-3 bg-customGreen text-white font-semibold rounded-full shadow-md hover:ring hover:ring-green-300">
            Login/Register</button>
        </div>
      </div>
      

    </header>
  );
};

export default Header;
