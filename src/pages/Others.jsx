import React from 'react';

const DonationForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-20 ml-12 mr-12">
      <div className="md:w-1/2 p-4">
        <img 
          src="https://cdn.givingcompass.org/wp-content/uploads/2022/01/26103610/How-to-Strategic-Plan-for-Thoughtful-Employee-centered-Philanthropy.jpg"
          alt="Donation"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Make a Donation</h2>
        <div className="space-y-4">
          <input 
            type="text"
            placeholder=" Who are you?"
            className="w-full p-2 border border-blue-300 focus:ring-blue-600 rounded"
          />
          <input 
            type="text"
            placeholder="What would you like to serve?"
            className="w-full p-2 border border-blue-300 focus:ring-blue-600 rounded"
          />
          <input 
            type="text"
            placeholder="How can I contact you?"
            className="w-full p-2 border border-blue-300 rounded focus:ring-blue-600"
          />
        </div>
      <button className="flex items-center justify-center mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 focus:outline-none">
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
      </div>
      
    </div>
  );
};

export default DonationForm;