
import React from 'react';

const InputForm = () => {
  return (
    <div className="  bg-gradient-to-r from-gray-200 to-indigo-100 flex items-center justify-center p-4">
  
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
    
        <h2 className="text-2xl text-red-600 font-bold mb-6">Donation</h2>
        <form action='https://formspree.io/f/mpzvkjvb' method='post' >
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>

          <div>
            <div>
              <label className="block text-gray-700">City</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div> 
              <label className="block text-gray-700">Country</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
            <div className="mb-4">
            <label className="block text-gray-700">Phone number</label>
            <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Describe what you want to donate (quantity, type, breakable, weight, size)</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700">Do you have the ability to deliver the donation?</label>
            <div className="flex items-center">
              <input type="radio" name="gender" value="yes" className="mr-2" /> Yes
              <input type="radio" name="gender" value="no" className="ml-4 mr-2" /> No
            </div>
          </div>

        <button className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 focus:outline-none">
       <a href=''></a>
       <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        >
        </path>
      </svg>
           Send
        </button>
        </form>

        <div className="mt-4 text-center">
          <h6 className="text-blue-600">Thank you .. 
            We will contact you as soon as we notice the request </h6>
        </div>
      </div>
    </div>
  );
}

export default InputForm;