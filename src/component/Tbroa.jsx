import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TbroaComponent = () => {
  let navigate = useNavigate();
  return (
    <div className=" flex flex-col md:flex-row-reverse items-center justify-between p-4 md:p-6 bg-white m-4 md:m-10">
      <div className="border-y-4 w-full md:w-1/3 grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-0">
        <div className="col-span-2 md:col-span-1 p-2">
          <img src="https://givewrite.org.au/wp-content/uploads/2019/09/Donations-e1571400713666.jpg" alt="Donation 1" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
        <div className="col-span-2 md:col-span-1 p-2">
          <img src="https://angelview.org/wp-content/uploads/2023/03/donations-400x284.jpeg" alt="Donation 2" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
        <div className="col-span-2 p-2">
          <img src="https://junkpolice911.com/wp-content/uploads/2022/06/donate_furniture.jpg" alt="Donation 3" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
      </div>
      <div className="w-full md:w-3/4 flex flex-col items-start justify-center p-4 md:p-6">
        <p className="text-xl md:text-2xl mb-4">
          We embrace cooperation rather than avoid it as we believe that "we elevate others" and thus seek the benefit of all our partners in society collectively. 
          We are working to bridge the gap between those who want to give with those who need support. Considered the heart of civil society in the Arab world.
        </p>
        <h2 className="text-blue-600 text-xl md:text-2xl font-bold mb-4">If you have something to DONATE click here</h2>
        <button 
          className="bg-red-500 text-white font-semibold px-8 md:px-12 py-2 rounded-full shadow-md hover:bg-red-600 transition-colors"
          onClick={() => navigate("/Tbnew")}
        >
          Donate Now
        </button> 
      </div>
    </div>
  );
};

export default TbroaComponent;

