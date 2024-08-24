import React from 'react';
import { FaExchangeAlt, FaUndo, FaHeadset } from 'react-icons/fa';
import Title from './Title';

function Policy() {
  return (
    <div className="container mx-auto py-8 mt-5 " >
      <Title text1={'Our'} text2={'Policy'} />
      <div className="flex md:justify-around gap-7 sm:border   sm:flex-col md:flex-row sm:justify-center sm:items-center">
        {/* First Policy - Easy Exchange Policy */}
        <div className="text-center">
          <FaExchangeAlt className="text-4xl text-blue-500 mb-2 mx-auto" />
          <h3 className="text-lg font-semibold">Easy Exchange Policy</h3>
          <p>Easy you change or exchenage</p>
        </div>

        {/* Second Policy - 7 Days Return Policy */}
        <div className="text-center">
          <FaUndo className="text-4xl text-blue-500 mb-2 mx-auto" />
          <h3 className="text-lg font-semibold">7 Days Return Policy</h3>
          <p>Easy you change or exchenage</p>

        </div>

        {/* Third Policy - Best Customer Support */}
        <div className="text-center">
          <FaHeadset className="text-4xl text-blue-500 mb-2 mx-auto" />
          <h3 className="text-lg font-semibold">Best Customer Support</h3>
          <p>Easy you change or exchenage</p>

        </div>
      </div>
    </div>
  );
}

export default Policy;
