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
  <div className="container flex items-center justify-between py-4 px-4 ">
    {/* Left: Logo or Menu Icon */}
    <div className="flex items-center w-13">
      <button
        className="w-10 h-10 text-center block md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <img src={assets.menu_icon}/>
      </button>
      <img
  src={assets.medimeet_logo}
  alt="Logo"
  className=" w-50 lg:mx-0  h-auto md:mx-0 md:50  md:h-50"
/>

    </div>

    {/* Center: Navigation Links */}
    <div className="hidden md:flex items-center space-x-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-lg no-underline hover:text-customGreen px-3 py-2 rounded-full ${
            isActive
              ? "bg-customGreen text-white border border-lightGreen"
              : "text-gray-900"
          }`
        }
        exact="true"
      >
        HOME
      </NavLink>
      <NavLink
        to="/doctors"
        className={({ isActive }) =>
          `text-lg no-underline hover:text-customGreen px-3 py-2 rounded-full ${
            isActive
              ? "bg-customGreen text-white border border-lightGreen"
              : "text-gray-900"
          }`
        }
      >
        DOCTORS
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-lg no-underline hover:text-customGreen px-3 py-2 rounded-full ${
            isActive
              ? "bg-customGreen text-white border border-lightGreen"
              : "text-gray-900"
          }`
        }
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-lg no-underline hover:text-customGreen px-3 py-2 rounded-full ${
            isActive
              ? "bg-customGreen text-white border border-lightGreen"
              : "text-gray-900"
          }`
        }
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
    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
      showMenu ? 'translate-x-0' : '-translate-x-full'
    } transition-transform duration-300 ease-in-out z-50`}
  >
    {/* Sidebar Header */}
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <h1 className="text-xl font-bold text-gray-900">Menu</h1>
      <button
        onClick={toggleMenu}
        className="text-gray-500 hover:text-red-500 focus:outline-none"
      >
        <img src={assets.cross_icon}/>
      </button>
    </div>

    {/* Navigation Links */}
    <ul className="space-y-6 p-6">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
              isActive
                ? 'bg-customGreen text-white'
                : 'text-gray-900 hover:bg-gray-100 hover:text-customGreen'
            }`
          }
          exact="true"
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            `block text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
              isActive
                ? 'bg-customGreen text-white'
                : 'text-gray-900 hover:bg-gray-100 hover:text-customGreen'
            }`
          }
        >
          DOCTORS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `block text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
              isActive
                ? 'bg-customGreen text-white'
                : 'text-gray-900 hover:bg-gray-100 hover:text-customGreen'
            }`
          }
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `block text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
              isActive
                ? 'bg-customGreen text-white'
                : 'text-gray-900 hover:bg-gray-100 hover:text-customGreen'
            }`
          }
        >
          CONTACT
        </NavLink>
      </li>
    </ul>

    {/* Footer Section */}
    <div className="absolute bottom-4 left-0 w-full px-6">
      <p className="text-sm text-gray-500 text-center">
        © 2024 MediMeet.dev
      </p>
    </div>
  </div>
)}

</header>

  );
};

export default Header;
