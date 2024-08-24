import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {

const {currency, delivery_fee, getCartAmount , navigate} = useContext(ShopContext)
  return (
    <div className='w-full p-10 text-2xl'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTALS'}/>
        </div>
        <div className='flex  flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p className='font-bold'>Subtotal</p>
                <p className='font-bold'>{currency} {getCartAmount()}.00</p>
            </div>
            <hr/>
            <div className=' flex justify-between'>
                <p className='font-bold'>Shipping Fee</p>
                <p className='font-bold'>{currency} {delivery_fee}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p className='font-bold'>Total</p>
                <p className='font-bold'>{currency} {getCartAmount() === 0? 0 : getCartAmount() + delivery_fee}.00</p>
            </div>
        </div>
        <div>
            <button onClick={() => navigate("/placeOrder")} className='px-5 p-3 mt-3 text-white bg-black'>CheckOut</button>
        </div>
    </div>
  )
}

export default CartTotal