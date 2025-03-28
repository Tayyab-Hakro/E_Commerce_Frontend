import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className=" p-5 sm:py-4 lg:py-0 items-center justify-center">
      <Title text1="Latest" text2="Collection" />
      
      <p className='text-center text-2xl font-extrabold' >- These are our New Collections of clothes - </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
        {latestProducts.map((item, index) => (
          <ProductItems  className="flex  justify-center items-center  hover:bg-blue-200"
            key={index} 
            id={item._id} 
            image={item.image} 
            name={item.name} 
            currency={item.currency} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;
