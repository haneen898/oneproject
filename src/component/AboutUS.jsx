import React from 'react';
import { useNavigate } from 'react-router-dom';


const AboutUS = () => {
  let navigate = useNavigate();

  return (
    <div className="text-center flex flex-col md:flex-row items-center justify-center h-96 space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-8 bg-white">

    <div className="w-full md:w-1/2 text-center md:text-center">
      <p className="text-lg font-semibold text-red-500 mb-2">About Us</p>
      <h2 className="text-4xl text-blue-800 font-bold mb-4">Our Mission</h2>
      <p className="text-gray-700 italic text-xl mb-8">
        Our mission is to bridge the gap between generosity and need by providing a transparent and efficient 
        platform for connecting donors with individuals and families facing poverty, homelessness, and food insecurity in our community
      </p>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-colors"
        onClick={() => navigate("/About")}
      >
        Learn More
      </button>
    </div>
  
  </div>
  
  );
};

export default AboutUS;
