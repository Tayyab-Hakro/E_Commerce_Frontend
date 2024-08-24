import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems'
function RelatedProducts({category, subCategory}) {
const {products} = useContext(ShopContext)
const [related , setRelated] = useState([])

useEffect(()=>{
if(products.length>0){
    let productsCopy = products.slice()

    productsCopy = productsCopy.filter((item) => category === item.category);
    productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

    setRelated(productsCopy.slice(0,5))
}

},[products])
    return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={`Related`} text2={`Products`} />
            <div className='grid grid-cols-5 gap-3 flex'>
            {related.map((item, index) => (
          <ProductItems 
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

    </div>
  )
}

export default RelatedProducts