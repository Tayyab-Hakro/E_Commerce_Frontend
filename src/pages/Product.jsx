import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import RelatedProducts from '../components/RelatedProducts';

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  return productData ? (
    <>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-wrap lg:flex-nowrap gap-8'>
          {/* Product Image Selection */}
          <div className='w-full lg:w-1/5 flex flex-row lg:flex-col gap-3'>
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className={`cursor-pointer border-2 ${image === item ? 'border-blue-500' : 'border-transparent'} hover:border-blue-500 transition duration-300 w-16 h-16 object-cover`}
                alt={productData.name}
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div className='w-full lg:w-2/5'>
            <img src={image} className='w-full max-w-sm mx-auto' alt={productData.name} />
          </div>

          {/* Product Data */}
          <div className='w-full lg:w-2/5'>
            <h1 className='text-2xl font-semibold mb-4'>{productData.name}</h1>

            {/* Star Rating */}
            <div className='flex items-center mb-4'>
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStarHalfAlt className='text-yellow-400' />
              <FaRegStar className='text-yellow-400' />
              <p className='ml-2 text-gray-600'>(122)</p>
            </div>

            <p className='text-lg font-bold text-gray-800'>
              {currency}
              {productData.price}
            </p>
            <p className='text-gray-700 mt-5 mb-4'>{productData.description}</p>

            {/* Size Selection */}
            <div>
              <p className='pb-3 text-lg font-bold text-black'>Select size</p>
              <div className='flex gap-4 flex-wrap'>
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`px-4 py-2 border rounded-lg transition ${
                      item === size ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-black'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(productData._id, size)}
              className='bg-black text-white px-6 py-3 mt-4 w-full md:w-auto'
            >
              ADD TO CART
            </button>

            <hr className='mt-6' />

            {/* Additional Info */}
            <div className='mt-6 space-y-2 text-gray-600'>
              <p>✅ 100% Original product</p>
              <p>✅ Cash on delivery available</p>
              <p>✅ Easy returns within 7 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Reviews Section */}
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap gap-5 mt-10'>
          <p className='border px-5 py-3 cursor-pointer'>Description</p>
          <p className='border px-5 py-3 cursor-pointer'>Reviews</p>
        </div>
        <div className='border border-gray-300 mt-4 p-4'>
          <p className='text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid magni reprehenderit amet cumque ipsam maxime iste! Asperiores alias iusto obcaecati? Neque ab praesentium consequuntur sed voluptate ipsa pariatur tenetur.
          </p>
          <p className='mt-2 text-gray-700'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ab labore dignissimos perferendis eos. Repellat, dolorem nisi unde, dolore vitae inventore modi voluptatum laboriosam culpa praesentium blanditiis. Soluta, exercitationem doloremque.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </>
  ) : (
    <div className='opacity-0'></div>
  );
}

export default Product;
