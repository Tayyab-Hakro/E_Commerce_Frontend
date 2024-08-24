import React, { useContext, useState } from 'react';
import { FaCcStripe, FaCcMastercard, FaMoneyBillAlt } from 'react-icons/fa'; // Using Mastercard icon as a placeholder for Razorpay
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
const {navigate } = useContext(ShopContext)
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      {/* Left Side - Delivery Information */}
      <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Delivery Information</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="City"
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Zipcode"
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone"
            className="p-3 border rounded-lg w-full"
          />
        </div>
      </div>

      {/* Right Side - CartTotal and PaymentMethod */}
      <div className="lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        {/* Payment Method */}
        <h4 className="text-xl font-semibold mt-8 mb-4 justify-center items-center flex">Payment Method</h4>
        <div className="flex gap-4 justify-center items-center flex">
          <div className="flex items-center ">
            <FaCcStripe
              onClick={() => setMethod('stripe')}
              className={`text-2xl mr-2 ${method === 'stripe' ? 'bg-red-200' : ''}`}
            />
            <span>Stripe</span>
          </div>
          <div className="flex items-center">
            <FaCcMastercard
              onClick={() => setMethod('razorpay')}
              className={`text-2xl mr-2 ${method === 'razorpay' ? 'bg-red-200' : ''}`}
            />
            <span>Razorpay</span>
          </div>
          <div className="flex items-center">
            <FaMoneyBillAlt
              onClick={() => setMethod('cod')}
              className={`text-2xl mr-2 ${method === 'cod' ? 'bg-red-200' : ''}`}
            />
            <span>Cash on Delivery</span>
          </div>
        </div>
        <div>
          <button onClick={() => navigate('/order')} className='p-3 ml-56 mt-5 justify-center items-center flex bg-black text-white'>PlaceOrder</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
