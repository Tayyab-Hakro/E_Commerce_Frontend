import React, { useState } from 'react';

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(true); // Initially showing the login form

  const handleLogin = () => {
    // Handle login logic here
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    // Handle signup logic here
    setIsLoggedIn(true);
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='w-full max-w-sm p-8 bg-white shadow-lg rounded-lg'>
        {isSignup && (
          <div>
            <h2 className='text-2xl font-bold mb-6'>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <div className='mb-4'>
                <label className='block text-gray-700'>Name</label>
                <input
                  type='text'
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700'>Email</label>
                <input
                  type='email'
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700'>Password</label>
                <input
                  type='password'
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'
              >
                Sign Up
              </button>
            </form>
            <p className='mt-4 text-gray-600'>
              Already have an account?{' '}
              <span
                className='text-blue-500 hover:underline cursor-pointer'
                onClick={() => setIsSignup(false)}
              >
                Log in
              </span>
            </p>
          </div>
        )}

        {!isSignup && (
          <div>
            <h2 className='text-2xl font-bold mb-6'>Log In</h2>
            <form onSubmit={handleLogin}>
              <div className='mb-4'>
                <label className='block text-gray-700'>Email</label>
                <input
                  type='email'
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700'>Password</label>
                <input
                  type='password'
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'
              >
                Log In
              </button>
            </form>
            <p className='mt-4 text-gray-600'>
              <span
                className='text-blue-500 hover:underline cursor-pointer'
                onClick={() => alert('Forgot Password functionality to be implemented!')}
              >
                Forgot Password?
              </span>
            </p>
            <p className='mt-2 text-gray-600'>
              Don’t have an account?{' '}
              <span
                className='text-blue-500 hover:underline cursor-pointer'
                onClick={() => setIsSignup(true)}
              >
                Sign Up
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
