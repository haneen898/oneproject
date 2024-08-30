import React from 'react';
import { useNavigate } from 'react-router-dom';

const SajelComponent = () => {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col m-4 md:m-10 md:flex-row p-4 md:p-6 bg-white">
      <div className="border-y-4 ml-2 md:ml-8 md:w-1/3 grid grid-cols-2 gap-2 md:gap-4">
        <div className="col-span-2 md:col-span-1 p-2">
          <img src="https://th.bing.com/th/id/R.ca2d4df7cce917df179d6ffe62e2695b?rik=IwWI%2b4xTLw9RzA&riu=http%3a%2f%2fwww.turkpress.co%2fsites%2fdefault%2ffiles%2fthumbs_b2_40c2fa00d6b02d8d920ef7ffa73083dd_0.jpg&ehk=9YdV%2fM2L6Ht6EjxZ6PNQC7ZyhS0S2kKuFeG01vQtzgI%3d&risl=&pid=ImgRaw&r=0" 
          alt="Donation 1" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>

        <div className="col-span-2 md:col-span-1 p-2">
          <img src="https://files.globalgiving.org/ufil/2401971/reg318110.jpg" alt="Donation 2" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>

        <div className="col-span-2 p-2">
          <img src="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/2470/2021/06/3-Causes-of-Lazy-Eye-in-Children-640.jpg" alt="Donation 3" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
      </div>

      <div className="mt-4 md:mt-0 md:ml-10 md:w-1/2 flex flex-col items-start justify-center p-4 md:p-6 md:text-left md:mr-6">
        <p className="text-left italic text-xl md:text-2xl ml-2 md:ml-6 mb-4 md:text-left">
             Our goal is to create cooperative communities where individuals can work together to improve their lives,
            We support the formation of local associations that focus on identifying and addressing community needs. 
        </p>
        <h2 className="text-blue-800 text-xl md:text-2xl font-bold ml-2 md:ml-7 mb-4">If you have a DAR click here</h2>
        <button 
          className="bg-red-500 ml-2 md:ml-7 transition-colors text-white px-8 md:px-12 py-2 rounded-full shadow-md hover:bg-red-600"
           onClick={() => navigate("/SajelDark")} >
          Record oF DARAK 
        </button>
      </div>
    </div>
  );
};

export default SajelComponent;
