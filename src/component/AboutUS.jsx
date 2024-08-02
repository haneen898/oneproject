import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUS = () => {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-8 bg-white">
      
      <div className="w-full mb-8 md:w-1/2 md:mb-0">
        <img
          src="https://djuqbvg97u5zb.cloudfront.net/printlabo/images/cms/ab_1713604518002.png"
          alt="Our Mission"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="pt-40 w-full md:w-1/2 text-center md:text-left ">
        <p className="text-sm font-semibold text-red-500 mb-2">About Us</p>
        <h2 className="text-3xl text-blue-600 font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 text-xl mb-8">
          'Facilitates your donation if you are interested in educating orphans, caring for and volunteering for them,
          you have nothing to pay and no money to apply We are here to help you'
        </p>
        <button
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-600 transition-colors"
          onClick={() => navigate("/About")}
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default AboutUS;
