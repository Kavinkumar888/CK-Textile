import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'; // Import social media icons from fi
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from fa
import { useCart } from '../context/CartContext'; // Import CartContext for cart functionality
import logo from '../assets/logo.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart(); // Get the items from the cart context

  const handleLinkClick = () => {
    // Close the menu
    setMenuOpen(false);
    // Scroll to the top
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white shadow-md">
      {/* First Layer: Logo, Hamburger and Cart Icons */}
      <div className="flex justify-between items-center px-4 py-4 md:px-8 h-20 relative">
        {/* Mobile Menu Toggle (Hamburger Menu) on the left */}
        <button
          className="md:hidden text-gray-600 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo in the Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo" className="h-20" />
        </div>

        {/* Cart Icon on the Right for Mobile */}
        <div className="md:hidden absolute top-7 right-4">
          <NavLink
            to="/cart"
            className="flex items-center space-x-2 text-gray-600"
            onClick={handleLinkClick} // Close menu and scroll to top
          >
            <FiShoppingCart className="text-xl" />
            {/* Display the number of items in the cart */}
            {cartItems.length > 0 && (
              <span className="absolute top-[-15px] right-[-10px] bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartItems.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>

      {/* Second Layer: Navigation Links */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:flex justify-between items-center bg-gray-100 px-4 md:px-8 py-4`}
      >
        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm md:text-base font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'hover:text-blue-500'
              }
              onClick={handleLinkClick} // Close menu and scroll to top
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/men"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'hover:text-blue-500'
              }
              onClick={handleLinkClick} // Close menu and scroll to top
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/women"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'hover:text-blue-500'
              }
              onClick={handleLinkClick} // Close menu and scroll to top
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kids"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'hover:text-blue-500'
              }
              onClick={handleLinkClick} // Close menu and scroll to top
            >
              Kids
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bedroomsets"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'hover:text-blue-500'
              }
              onClick={handleLinkClick} // Close menu and scroll to top
            >
              Bedroom Sets
            </NavLink>
          </li>
        </ul>

        {/* Cart Icon for Medium and Large Screens */}
        <div className="hidden md:flex items-center space-x-4 relative">
          <NavLink
            to="/cart"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-300"
            onClick={handleLinkClick} // Close menu and scroll to top
          >
            <div className="relative">
              <FiShoppingCart className="text-2xl" />
              {/* Cart Badge */}
              {cartItems.length > 0 && (
                <span className="absolute top-[-12px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
            <span className="hidden md:block text-gray-600 font-medium text-sm">
              Cart
            </span>
          </NavLink>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 bg-gray-100 py-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FiFacebook size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          <FiTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700"
        >
          <FiInstagram size={24} />
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
