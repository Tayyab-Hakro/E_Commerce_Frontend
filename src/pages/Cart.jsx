import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { AiOutlineDelete } from 'react-icons/ai';
import CartTotal from '../components/CartTotal';

function Cart() {
  const { products, currency, cartItems,updateQuantity } = useContext(ShopContext);
  const [cartData, setCartDate] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartDate(tempData);
  }, [cartItems]);

  return (
    <>
      <div className='border-t pt-4'>
        <div className='text-2xl mb-3'>
          <Title text1={'Your'} text2={`Cart`} />
        </div>
      </div>
      {
        cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div key={index} className='flex justify-between items-center py-6 border-b'>
              <div className='flex items-center'>
                <img src={productData.image[0]} className='w-24 h-24 object-cover rounded-md' alt={productData.name} />
                <div className='ml-4'>
                  <p className='text-lg font-semibold'>{productData.name}</p>
                  <p className='text-gray-500'>{item.size}</p>
                  <p className='text-gray-900'>{currency}{productData.price}</p>
                </div>
              </div>
              <div className='flex gap-60 items-center justify-between'>
                <input onChange={(e) =>e.target.value === '' || e.target.vale === '0' ? null : updateQuantity(item._id,item.size ,Number(e.target.value))} type='number' className='bg-gray-50 border border-gray-300 text-center w-16 p-2 rounded-md' min={1} defaultValue={item.quantity} />
                <button onClick={() =>updateQuantity(item._id,item.size ,0)} className='ml-4 text-red-500 hover:text-red-700 mr-12'>
                  <AiOutlineDelete size={24} />
                </button>
              </div>
            </div>
          );
        })
      }
      <div className='flex justify-end my-20'>
        <div className='w-full sm-w-[450px]'>
          <CartTotal/>
        </div>

      </div>
    </>
  );
}

export default Cart;
