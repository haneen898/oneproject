import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroCompount = () => {
  let navigate = useNavigate();
  return (
    <div className="relative backdrop-contrast-50 w-screen h-screen">
    <img 
      src='https://img.freepik.com/premium-photo/civilian-refugee-affected-from-aggression-war-battle-escape-city-from-war-zone-which-has-no-little-comeliness_31965-263110.jpg' 
      alt="Hero" 
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.3), black)',
        WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.3), black)',
      }}
    />
    <div className="relative flex items-center justify-start h-full p-8">
      <div className="text-star w-full md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold text-blue-900 sm:text-5xl"></h2>
        <h4 className="mt-2 text-4xl font-bold text-blue-900 sm:text-4xl">A brighter future starts here, Join us in creating a world where every child has a full belly and a hopeful heart</h4>
        <p className="mt-4 italic text-2xl font-bold text-gray-800">
        TabaraCOM is dedicated to creating a brighter future
        </p>
        <button 
          className=" mt-6 bg-red-500 text-white font-semibold px-8 md:px-12 py-2 rounded-full shadow-md hover:shadow-xl hover:bg-red-600 transition-colors"
         onClick={() => navigate("/ButtonsTbroa")} >
          DONATE NOW
        </button> 
      </div>
    </div>
  </div>
  
  );
};

export default HeroCompount;


