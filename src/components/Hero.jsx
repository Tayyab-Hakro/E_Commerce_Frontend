import React from 'react';
import Heropci from '../components/Assest/hero_img.png'
const Hero = () => {
  return (
    <div className="flex items-center  sm:flex-col md:flex-row border border-gray-400">
     <div className='w-full sm:w-full flex sm:flex-col items-center md:justify-center py-10 sm:py-0'>
     <div className="text-[#414141] ">
      <div className='flex items-center gap-2'>
        <p className="w-8 md:w-11 mb-3 h-[4px] bg-[#414141]  "></p>
        <p className="text-4xl font-bold  text-gray-800 mb-4">Our BestSellers</p>
        </div>
         <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-relaxed">Latest Arrivals</h1>
         <div className='flex items-center'>
        <p className="px-6 py-3  items-center flex text-4xl text-black font-bold rounded-lg ">Shop Now  </p>
        <p className="w-8 md:w-11 mt-3 h-[4px] bg-[#414141]"></p>

        </div>
        </div>
  

      </div>

      {/* Image Section */}
      <img src={Heropci} alt="Latest Arrivals" className="items-center flex w-full sm:w-1/2" />
  
    </div>
  );
};

export default Hero;
