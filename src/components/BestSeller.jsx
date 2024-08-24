import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';
import { products } from './Assest/assets';
function BestSeller() {
  const { products } = useContext(ShopContext);
  const [Bestseller, setBestseller] = useState([]);  
  useEffect(() => {
    let Bestproduct = products.filter((item) => item.bestseller);
    setBestseller(Bestproduct.slice(0, 5)); 
  }, []);

  return (
    <div className="container mx-auto py-8">
      <Title text1="Best Seller" text2="Products" />
      <p className='flex items-center justify-center'>Lorem . Veritatis quod, molestias autem eius maxime non optio.</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
        {Bestseller.map((item, index) => (
          <ProductItems
            key={index}
            id={item.id}
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

export default BestSeller;
