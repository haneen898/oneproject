import React from "react";
import { useNavigate } from 'react-router-dom';

const Doorcompount = () => {
  let navigate = useNavigate();

  return (
    <div className="flex justify-end">
      <button 
        className="bg-red-500 hover:bg-red-600 text-white 
        font-semibold mr-20 py-8 px-6 rounded-full transition-colors md:px-8 md:py-3 lg:px-10 lg:py-4"
         onClick={() => navigate("/Dark")}>
        List of registered orphanages
      </button>
    </div>
  );
}

export default Doorcompount;


