import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

function Order() {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl mb-8'>
        <Title text1={'MY'} text2={'ORDER'} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div key={index} className='py-4 border-t border-b flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex items-start gap-6'>
              <img className='w-16 h-16 object-cover' src={item.image} alt={item.name} />
              <div>
                <p className='text-lg font-medium'>{item.name}</p>
                <p className='text-sm text-gray-500'>Size: L M</p>
                <p className='text-sm text-gray-500'>Quantity: 1</p>
                <p className='text-sm text-gray-500'>
                  Date: <span className='text-black'>24 Jul 2939</span>
                </p>
                <p className='text-sm text-gray-500'>
                  Price: {currency} {item.price}
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <span className='w-3 h-3 rounded-full bg-green-500'></span>
              <p className='text-xs text-gray-500'>Ready to ship</p>
            </div>
            <button className='text-sm text-blue-600 hover:underline'>
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
