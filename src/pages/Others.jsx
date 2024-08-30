import React from 'react';
import Navbar from '../layout/NavBar';
import Footer from '../layout/Footer';

const DonationForm = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-3 ml-16 mr-16">
  <div className="md:w-1/2 p-4">
    <img 
      src="https://cdn.givingcompass.org/wp-content/uploads/2022/01/26103610/How-to-Strategic-Plan-for-Thoughtful-Employee-centered-Philanthropy.jpg"
      alt="Donation"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="md:w-1/2 p-4">
    <h2 className="text-xl font-bold text-blue-800 mb-4">Make a Donation</h2>
    <form className="space-y-4" action="https://formspree.io/f/mpzvkjvb" method="post">
      <input 
        type="text" name="Who are you?" placeholder="Who are you?"
        className="w-full p-2 border border-blue-300 focus:ring-blue-800 rounded"
      />
      <input 
        type="text" name="What would you like to serve?" placeholder="What would you like to serve?"
        className="w-full p-2 border border-blue-300 focus:ring-blue-800 rounded"
      />
      <input 
        type="text" name="How can I contact you?" placeholder="How can I contact you?"
        className="w-full p-2 border border-blue-300 rounded focus:ring-blue-800"
      />
      <button 
        type="submit"
        className="flex items-center justify-center mt-8 px-6 py-2 bg-blue-800 text-white font-semibold rounded-full shadow-md 
        transform transition-transform duration-300 hover:scale-105 focus:outline-none"
      >
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
          />
        </svg>
        Send
      </button>  
    </form>
  </div>
</div>

    <Footer/>
    </>
    
  );
};

export default DonationForm;
