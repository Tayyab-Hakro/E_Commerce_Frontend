import React from 'react';
import Logo from './Assest/logo.png';

function Footer() {
  return (
    <footer className="grid  text-black font-serif font-bold py-10">
      <div className="container lg:w-full lg:flex-row text-black font-serif font-bold sm:w-full sm:text-2xl mx-auto flex  sm:flex-col sm:justify-center sm:items-center  md:justify-between">
        
        {/* First Div - Logo and Description */}
        <div className="md:w-full lg:justify-center lg:items-center  sm:text-black sm:font-serif sm:font-bold  sm:w-[500px] sm:items-center sm:justify-center mb-6 sm:mb-0">
          <div className="mb-4">
            <img src={Logo} alt="Company Logo" className="h-12 mb-2" /> {/* Replace with your logo */}
          </div>
          <p className="text-black font-serif sm:font-bold md:font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet urna nec dui tristique feugiat.
          </p>
        </div>
        
        {/* Second Div - Company Links */}
        <div className="w-full  p-2 sm:w-[500px] sm:items-center mt-5 sm:justify-center   sm:mb-6 lg:mb-0">
          <h3 className="sm:text-2xl lg:text-xl text-black font-serif font-bold ">Company</h3>
          <ul className="text-black text-[20px] font-serif font-bold">
            <li className="mb-2 hover:text-gray-200 cursor-pointer">Home</li>
            <li className="mb-2 hover:text-gray-200 cursor-pointer">About</li>
            <li className="mb-2 hover:text-gray-200 cursor-pointer">Delivery</li>
            <li className="mb-2 hover:text-gray-200 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        
        {/* Third Div - Get in Touch */}
        <div className="w-full sm:text-2xl   p-4  sm:w-4/5 line-clamp-4 text-black font-serif font-bold text-black">
          <h3 className="text-2xl  font-semibold mb-4 text-black font-serif font-bold">Get in Touch</h3>
          <p className=" mb-2 text-black font-serif font-bold">Phone: +123-456-7890</p>
          <p className=" text-black font-serif font-bold">Email: contact@company.com</p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
