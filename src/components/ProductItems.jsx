import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function ProductItems({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link 
      to={`/product/${id}`} 
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img 
     src={image[0]} 
        alt={name} 
        className="w-full overflow-hidden  transition-colors ease-in-out h-4/5 " 
      />
      <div className="sm:p-4 md:p-5">
        <p className=" sm:text-[5px] lg:text-[11px] sm:font-semibold text-gray-800 ">{name}</p>
        <p className="text-xl sm:mb-3 md:mb-0 font-bold text-blue-600">{currency}{price}</p>
      </div>
    </Link>
  );
}

export default ProductItems;
