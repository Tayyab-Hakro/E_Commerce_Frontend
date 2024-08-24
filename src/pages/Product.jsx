import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import RelatedProducts from '../components/RelatedProducts';

function Product() {
  const { productId } = useParams();
  const { products, currency ,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size , setsize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
      return null;
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <>
   <div className='flex border-t-2 p-4 pt-10 border-gray-200 '>
      <div className='flex gap-8 flex-col md:flex-row items-center md:items-start'>
        {/* Product Image Selection */}
        <div className='w-full md:w-1/6  flex flex-col space-y-2 '>
          {productData.image.map((item, index) => (
            <img
              onClick={() => setImage(item)}
              src={item}
              key={index}
              className={`cursor-pointer border-2 ${image === item ? 'border-blue-500' : 'border-transparent'} hover:border-blue-500 transition duration-300`}
              alt={productData.name}
            />
          ))}
        </div>

        {/* Main Product Image */}
        <div className='w-full  flex'>
          <img src={image} className='w-[75%] h-auto' alt={productData.name} />
        </div>
      </div>

      {/* Product Data */}
      <div className='flex-1 '>
        <h1 className='text-2xl font-semibold mb-4'>{productData.name}</h1>
        
        {/* Star Rating */}
        <div className='flex items-center mb-4 '>
          <FaStar className='text-yellow-400' />
          <FaStar className='text-yellow-400' />
          <FaStar className='text-yellow-400' />
          <FaStarHalfAlt className='text-yellow-400' />
          <FaRegStar className='text-yellow-400' />
          <p className='ml-2 text-gray-600'>(122)</p>
        </div>

        <p className='text-lg font-bold text-gray-800'>{currency}{productData.price}</p>
        <p className='text-lg font-bold text-gray-4 font-sans mt-5 mb-4'>{productData.description}</p>
        <div className=''>
          <p className='pb-3 text-[1.3rem] font-bold font-sans  text-black'>Select size</p>
          <div className='flex gap-4'> 
            {
              productData.sizes.map((item, index)=>(
               <button onClick={()=>setsize(item)} className={`flex bg-gray-200 text-black flex-row gap-4 p-3 ${item === size ? "bg-yellow-500":""}`} key={index}>{item}</button> 
              ))
            }
          </div>
        </div>
        <button onClick={()=>addToCart(productData._id,size)} className='flex bg-black text-white items-center px-8 py-3 mt-4' >ADD To Cart</button>
      <hr className='mt-6'/>
      <div className='mt-10'>
        <p>100% Oriiginal product</p>
        <p>Cash on develiry is also avaiable</p>
        <p>Cash on develiry is also avaiable</p>

      </div>
      </div>
     
    </div>
     <div>
     <div className='flex  gap-5  mt-10 px-4 py-3'>
       <p className='border px-5 py-3'>Description</p>
       <p className='border  px-5 py-3'>Reivew</p>
     </div>
     <div className='border border-gray-300'>
       <p className='mt-10 text-1xl p-3'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid magni reprehenderit amet cumque ipsam maxime iste! Asperiores alias iusto obcaecati? Neque ab praesentium consequuntur sed voluptate ipsa pariatur tenetur. ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit quas porro laudantium ad amet asperiores nam similique delectus quaerat incidunt veniam alias possimus eveniet, dolorem sed nostrum beatae magnam.</p>
         <p className='mt-2 text-1xl p-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ab labore dignissimos perferendis eos. Repellat, dolorem nisi unde, dolore vitae inventore modi voluptatum laboriosam culpa praesentium blanditiis. Soluta, exercitationem doloremque.</p>
     </div>
   </div>
   <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
   </>
  ) : (
    <div className='opacity-0'></div>
  );
}

export default Product;
