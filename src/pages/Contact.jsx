import React from 'react';
import ContactPic from '../components/Assest/contact_img.png'
function Contact() {
  return (
    <div className='container mx-auto py-16 px-4'>
      {/* Contact Us Heading */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold'>Contact Us</h1>
        <div className='w-24 h-1 bg-blue-500 mx-auto mt-4'></div>
      </div>

      {/* Content Section */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
        {/* First Side - Image */}
        <div className='md:w-1/2'>
          <img
            src={ContactPic}
            alt='Our Store'
            className='w-full h-auto object-cover rounded-lg shadow-lg'
          />
        </div>

        {/* Second Side - Text Content */}
        <div className='md:w-1/2'>
          <h2 className='text-2xl font-semibold mb-4'>Our Store</h2>
          <p className='text-lg text-gray-700 mb-2'>Number: 1234</p>
          <p className='text-lg text-gray-700 mb-6'>Name: Forever Store</p>
          <p className='text-lg text-gray-700 mb-6'>Address: 1234 Random St, Random City, Country</p>
          <p className='text-lg text-gray-700 mb-6'>Tel: (123) 456-7890</p>
          <p className='text-lg text-gray-700 mb-8'>Email: contact@foreverstore.com</p>

          {/* Careers Section */}
          <h2 className='text-2xl font-bold mb-4'>Careers at Forever</h2>
          <p className='text-lg text-gray-700 mb-8'>
            We are always looking for talented individuals to join our team. Explore the exciting career opportunities we offer and be part of our success story.
          </p>
          
          {/* Explore Jobs Button */}
          <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-black transition duration-300'>
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
