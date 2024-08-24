import React from 'react';
import Newsletter from '../components/Newsletter';
import Aboutpic from '../components/Assest/about_img.png'
function About() {
  return (
    <div className='container mx-auto py-16 px-4'>
      {/* About Us Heading */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold'>About Us</h1>
        <div className='w-24 h-1 bg-blue-500 mx-auto mt-4'></div>
      </div>

      {/* Content Section */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* Left Side - Image */}
        <div className='md:w-1/2'>
          <img
            src={Aboutpic}
            alt='About Us'
            className='w-full h-auto object-cover rounded-lg shadow-lg'
          />
        </div>

        {/* Right Side - Text Content */}
        <div className='md:w-1/2'>
          <p className='text-lg text-gray-700 mb-5'>
            We are a team of passionate individuals committed to delivering the best services and products to our customers. Our journey started with a simple idea, and over the years, we have grown into a reputable company known for our quality and customer-centric approach.
          </p>
          <p className='text-lg text-gray-700 mb-5'>
            Our values are centered around trust, integrity, and innovation. We believe in creating meaningful relationships with our customers and continuously strive to exceed their expectations. Your satisfaction is our priority, and we are always here to help you with anything you need.
          </p>

          {/* Mission Section */}
          <h2 className='text-2xl font-bold mt-8'>Our Mission</h2>
          <p className='text-lg text-gray-700 mt-4'>
            Our mission is to empower individuals and businesses through innovative solutions and unparalleled customer service. We are dedicated to making a positive impact in the communities we serve and are committed to sustainability, quality, and excellence in all that we do.
          </p>
        </div>
      </div>
      <div className='container mx-auto py-16 px-4'>
      {/* Why Choose Us Heading */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold'>Why Choose Us</h1>
        <div className='w-24 h-1 bg-blue-500 mx-auto mt-4'></div>
      </div>

      {/* Three Divs in One Row */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        {/* First Div - Quality Assurance */}
        <div className='border p-6 rounded-lg shadow-lg text-center w-full md:w-1/3'>
          <h2 className='text-2xl font-semibold mb-4'>Quality Assurance</h2>
          <p className='text-gray-700'>
            We ensure the highest quality standards in all our products, providing you with top-notch services that you can trust.
          </p>
        </div>

        {/* Second Div - Convenience */}
        <div className='border p-6 rounded-lg shadow-lg text-center w-full md:w-1/3'>
          <h2 className='text-2xl font-semibold mb-4'>Convenience</h2>
          <p className='text-gray-700'>
            Experience the convenience of easy access to our services, tailored to meet your needs at any time and place.
          </p>
        </div>

        {/* Third Div - Exceptional Customer Service */}
        <div className='border p-6 rounded-lg shadow-lg text-center w-full md:w-1/3'>
          <h2 className='text-2xl font-semibold mb-4'>Exceptional Customer Service</h2>
          <p className='text-gray-700'>
            Our team is dedicated to providing exceptional customer service, ensuring that your experience with us is always positive.
          </p>
        </div>
      </div>
    </div>
    <Newsletter/>
    </div>
  );
}

export default About;
