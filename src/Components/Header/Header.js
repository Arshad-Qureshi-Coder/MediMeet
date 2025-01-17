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
    // bg-[#eaecee]
    <header className={`bg-[#F2F6F6] z-50 w-full transition-all duration-500 ease-in-out ${
      isScrolled ? 'fixed top-0 left-0 shadow h-[100px] bg-[#F2F6F6]' : 'h-[auto] '
    }`}
    >
  <div className=" flex items-center justify-between py-4 px-4 ">
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
      `text-base font-semibold m-6 group relative w-max ${
        isActive ? "text-customGreen no-underline" : "text-gray-900"
      }`
    }
    exact="true"
  >
    <span>HOME</span>
    <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
    <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
  </NavLink>

  <NavLink
    to="/doctors"
    className={({ isActive }) =>
      `text-base font-semibold m-6 group relative w-max ${
        isActive ? "text-customGreen no-underline" : "text-gray-900"
      }`
    }
  >
    <span>DOCTORS</span>
    <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
    <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `text-base font-semibold m-6 group relative w-max ${
        isActive ? "text-customGreen no-underline" : "text-gray-900"
      }`
    }
  >
    <span>ABOUT</span>
    <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
    <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `text-base font-semibold m-6 group relative w-max ${
        isActive ? "text-customGreen no-underline" : "text-gray-900"
      }`
    }
  >
    <span>CONTACT</span>
    <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
    <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
  </NavLink>

  <NavLink
    to="/admin"
    className="m-6"
  >
    <button
      type="button"
      class="py-2.5 px-6 text-sm border border-gray-300 rounded-full shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
    >
      Admin
    </button>
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
                onClick={() => setIsOpen(false)}
              >
                My Profile
              </NavLink>
              <NavLink
                to="/appointments"
                className="block px-4 py-3 text-md text-gray-500 font-bold hover:bg-gray-100 transition-colors no-underline"
                onClick={() => setIsOpen(false)}
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
    className={`fixed bg-white top-0 left-0 h-full w-72  shadow-lg transform ${
      showMenu ? 'translate-x-0' : '-translate-x-full'
    } transition-transform duration-300 ease-in-out z-50`}
  >
    {/* Sidebar Header */}
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      {/* <h1 className="text-xl font-bold text-gray-900">Menu</h1> */}
      <img src={assets.medimeet_logo} className='w-[200px] bg-white rounded'/>
      <button
        onClick={toggleMenu}
        className="text-gray-500 hover:text-red-500 focus:outline-none"
      >
        <img src={assets.cross_icon} className='bg-white rounded'/>
      </button>
    </div>

    {/* Navigation Links */}
    <ul className="p-0">
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `flex items-center h-16 pt-3 px-5 text-lg font-medium border-b transition-colors no-underline ${
          isActive
            ? 'bg-customGreen text-white'
            : 'text-gray-900 hover:bg-gray-100 hover:text-customGreen'
        }`
      }
      exact="true"
      onClick={() => setShowMenu(false)}
    >
      <i className="bi bi-house-door-fill mr-2"></i> {/* Home Icon */}
      HOME
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/doctors"
      className={({ isActive }) =>
        `flex items-center h-16 pt-3 px-5 text-lg font-medium border-b transition-colors no-underline ${
          isActive
            ? 'bg-customGreen text-white'
            : 'text-gray-900 hover:bg-gray-100 hover:text-customGreen'
        }`
      }
      onClick={() => setShowMenu(false)}
    >
      <i className="bi bi-person-fill mr-2"></i> {/* Doctors Icon */}
      DOCTORS
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        `flex items-center h-16 pt-3 px-5 text-lg font-medium border-b transition-colors no-underline ${
          isActive
            ? 'bg-customGreen text-white'
            : 'text-gray-900 hover:bg-gray-100 hover:text-customGreen'
        }`
      }
      onClick={() => setShowMenu(false)}
    >
      <i className="bi bi-info-circle-fill mr-2"></i> {/* About Icon */}
      ABOUT
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `flex items-center h-16 pt-3 px-5 text-lg font-medium border-b transition-colors no-underline ${
          isActive
            ? 'bg-customGreen text-white'
            : 'text-gray-900 hover:bg-gray-100 hover:text-customGreen'
        }`
      }
      onClick={() => setShowMenu(false)}
    >
      <i className="bi bi-envelope-fill mr-2"></i> {/* Contact Icon */}
      CONTACT
    </NavLink>
  </li>
</ul>


    {/* Footer Section */}
    <div className="absolute h-16 pt-4 px-5 bg-customGreen bottom-4 left-0 w-full px-6">
      <p className="text-sm text-white text-center">
        © 2024 MediMeet.dev
      </p>
    </div>
  </div>
)}

</header>

  );
};

export default Header;
