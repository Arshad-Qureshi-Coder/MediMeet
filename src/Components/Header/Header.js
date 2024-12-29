import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Header = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []); 

  return (
    <header className={`bg-[#eaecee] z-50 w-full transition-all duration-500 ease-in-out ${
      isScrolled ? 'fixed top-0 left-0 shadow h-[100px]' : 'h-[auto]'
    }`}
    >
  <div className="container flex items-center justify-between py-4 px-4 md:px-8">
    {/* Left: Logo or Menu Icon */}
    <div className="flex items-center ">
      <button
        className="block md:hidden text-gray-700 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6" 
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

      </button>
      <img
        src="/images/assets/medi-meet-removebg.png"
        alt="Logo"
        className="w-50 h-auto  md:w-50 md:h-30 "
      />
    </div>

    {/* Center: Navigation Links */}
    <div className="hidden md:flex items-center space-x-6">
      <NavLink
        to="/"
        className="text-lg text-gray-900 no-underline hover:text-customGreen"
        activeClassName="font-bold text-customGreen"
        exact
      >
        HOME
      </NavLink>
      <NavLink
        to="/doctors"
        className="text-lg text-gray-900 no-underline hover:text-customGreen"
        activeClassName="font-bold text-customGreen"
      >
        DOCTORS
      </NavLink>
      <NavLink
        to="/about"
        className="text-lg text-gray-900 no-underline hover:text-customGreen"
        activeClassName="font-bold text-customGreen"
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/contact"
        className="text-lg text-gray-900 no-underline hover:text-customGreen"
        activeClassName="font-bold text-customGreen"
      >
        CONTACT
      </NavLink>
    </div>

    {/* Right: Profile Image or Login */}
    <div className="flex items-center space-x-3">
      {token ? (
        <div className="relative flex items-center space-x-3">
          <img
            src={assets.profile_pic}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <img
            src={assets.dropdown_icon}
            className="w-3 h-3 cursor-pointer"
            onClick={toggleDropdown}
          />
          {isOpen && (
            <div className="absolute top-14 right-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
              <NavLink
                to="/profile"
                className="block px-4 py-3 text-md text-gray-500 font-bold hover:bg-gray-100 rounded-t-lg transition-colors no-underline"
              >
                My Profile
              </NavLink>
              <NavLink
                to="/appointments"
                className="block px-4 py-3 text-md text-gray-500 font-bold hover:bg-gray-100 transition-colors no-underline"
              >
                My Appointments
              </NavLink>
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-md text-red-500 font-bold hover:bg-gray-100 border-b border-gray-300 rounded-b-lg transition-colors no-underline"
              >
                Logout
              </NavLink>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="no-underline gap-2 px-6 py-2 bg-customGreen text-white font-semibold rounded-full shadow-md hover:ring hover:ring-green-300"
        >
          Login/Register
        </button>
      )}
    </div>
  </div>

  {/* Small Screen Menu */}
  {showMenu && (
    <div
    className={`fixed top-0 left-0 h-full bg-white shadow-md transform ${
      showMenu ? 'translate-x-0' : '-translate-x-full'
    } transition-transform duration-300 ease-in-out z-50`}
  >
    <ul className="space-y-4 text-center py-4">
      <li>
        <NavLink
          to="/"
          className="block text-lg text-gray-900 hover:text-customGreen"
          activeClassName="font-bold text-customGreen"
          exact
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/doctors"
          className="block text-lg text-gray-900 hover:text-customGreen"
          activeClassName="font-bold text-customGreen"
        >
          DOCTORS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="block text-lg text-gray-900 hover:text-customGreen"
          activeClassName="font-bold text-customGreen"
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="block text-lg text-gray-900 hover:text-customGreen"
          activeClassName="font-bold text-customGreen"
        >
          CONTACT
        </NavLink>
      </li>
    </ul>

    {/* Close Button */}
    <button
      onClick={toggleMenu}
      className="absolute top-4 right-4 text-gray-900 hover:text-customGreen focus:outline-none"
    >
      ✕ {/* You can replace this with a close icon */}
    </button>
  </div>
  )}
</header>

  );
};

export default Header;
