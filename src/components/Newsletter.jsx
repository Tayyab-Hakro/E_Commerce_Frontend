import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Add subscription logic here
    setSubscribed(true);
  };

  return (
    <div className="flex items-center justify-center h-[60%] py-8 mt-8 bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg transition transform duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold mb-4 animate-bounce">Subscribe now and get 20% off</h1>
        <p className="mb-6 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.
        </p>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 w-64 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSubscribe}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition duration-300"
          >
            Subscribe
          </button>
        </div>
        {subscribed && (
          <p className="mt-4 text-green-500 transition-opacity duration-500 ease-in-out">
            Thank you for subscribing!
          </p>
        )}
      </div>
    </div>
  );
}

export default Newsletter;
