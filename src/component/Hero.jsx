import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroCompount = () => {
  let navigate = useNavigate();
  return (
    <div className="relative w-screen h-screen">
    <img 
      src='https://www.statenislandmediagroup.com/wp-content/uploads/2018/10/packing-e1539883940948.jpg' 
      alt="Hero" 
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black)',
      }}
    />
    <div className="relative flex items-center justify-start h-full p-8">
      <div className="text-start w-full md:w-1/2 md:pl-8">
        <h1 className="text-3xl font-bold text-blue-600 sm:text-5xl">We help all people</h1>
        <h2 className="mt-2 text-2xl font-bold text-blue-600 sm:text-4xl">Building a Better Tomorrow, Together.</h2>
        <p className="mt-4 text-xl text-gray-800">
          TabaraCOM is dedicated to creating a brighter future for everyone,
          we embrace partnerships and cooperation, recognizing that by working together,
          we can achieve more than we could alone.
        </p>
        <button 
          className=" mt-6 border-solid border-2 border-gray-400 text-red-500 font-semibold px-8 md:px-12 py-2 rounded-full shadow-md hover:shadow-xl transition-colors"
         onClick={() => navigate("/ButtonsTbroa")} >
          DONATE NOW
        </button> 
      </div>
    </div>
  </div>
  
  );
};

export default HeroCompount;


