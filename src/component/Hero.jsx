import React from 'react';

const HeroCompount = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:flex-row">
      <div className="w-full mb-8 md:w-1/2 md:mb-0">
        <img 
          src='https://www.storage-mart.com/blog/wp-content/uploads/2018/11/ways_give_back_plymouth-1.jpg' 
          alt="Hero" 
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <h1 className="text-3xl font-bold text-blue-600 sm:text-5xl">We help all people</h1>
        <h2 className="mt-2 text-2xl font-bold text-blue-600 sm:text-4xl">Together We Will Rebuild Our Future</h2>
        <p className="mt-4 text-gray-800">
          "TabaraCOM is here to build a safe future for next generations
          We embrace cooperation rather than avoid it as we believe that
           "we elevate others and thus seek the benefit of all our partners in society collectively"
        </p>
        <div className="mt-8 space-y-4 flex flex-col items-center sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center md:mt-12 lg:mt-16">
          {/* <button 
            className="bg-red-500 text-white shadow-md font-bold py-2 px-4 rounded-full hover:bg-red-600 hover:shadow-xl transition-colors sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10"
            onClick={() => navigate("/Input")}>
            DONATE NOW
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroCompount;

