import React, { useContext, useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './Assest/logo.png';
import menu_icon1 from '../components/Assest/menu_icon.png';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="flex justify-between items-center px-4 py-3 bg-white shadow-md">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-10" />
        </div>

        {/* Navigation Links - Hidden on Small Screens */}
        <div className="hidden md:flex space-x-6 font-bold text-[18px] lg:text-[20px]">
          <Link to="/E_Commerce_Frontend/" className="relative group">
            HOME
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gray-400 group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/E_Commerce_Frontend/collection" className="relative group">
            COLLECTION
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gray-400 group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/E_Commerce_Frontend/about" className="relative group">
            ABOUT
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gray-400 group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/E_Commerce_Frontend/contact" className="relative group">
            CONTACT
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gray-400 group-hover:w-full transition-all"></span>
          </Link>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <FaSearch onClick={() => setShowSearch(true)} size={20} className="cursor-pointer hover:text-gray-400" />

          <div className="relative group">
            <Link to={'/E_Commerce_Frontend/login'}>
              <FaUser size={20} className="cursor-pointer hover:text-gray-400" />
            </Link>
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="p-2 hover:bg-gray-200 cursor-pointer">My Profile</p>
              <p className="p-2 hover:bg-gray-200 cursor-pointer">Orders</p>
              <p className="p-2 hover:bg-gray-200 cursor-pointer">Logout</p>
            </div>
          </div>

          <Link to={'/E_Commerce_Frontend/cart'} className="relative">
            <FaShoppingCart size={20} className="cursor-pointer hover:text-gray-400" />
            <span className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          </Link>
        </div>

        {/* Menu Icon - Visible on Small Screens */}
        <div className="md:hidden">
          <img src={menu_icon1} alt="Menu" className="h-8 cursor-pointer" onClick={toggleMenu} />
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link to="/E_Commerce_Frontend/" className="block py-2 px-4 hover:bg-gray-200">
            HOME
          </Link>
          <Link to="/E_Commerce_Frontend/collection" className="block py-2 px-4 hover:bg-gray-200">
            COLLECTION
          </Link>
          <Link to="/E_Commerce_Frontend/about" className="block py-2 px-4 hover:bg-gray-200">
            ABOUT
          </Link>
          <Link to="/E_Commerce_Frontend/contact" className="block py-2 px-4 hover:bg-gray-200">
            CONTACT
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
