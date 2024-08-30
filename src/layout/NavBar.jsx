import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  return (
    <nav className="bg-blue-900 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/hands.png" alt="Logo" className=" h-10 w-10 mr-2" />
          <span className="text-white text-xl font-bold">TaBaraCOM</span>
        </div>
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto">
  <div className="lg:flex lg:space-x-4">
    <button 
      className="text-white italic border-solid border-b border-white px-2 py-1 rounded-md shadow-lg
       transform hover:translate-y-1 active:translate-y-0 transition-transform duration-200"
      onClick={() => navigate("/Home")}
    >
      Home
    </button>
    <button 
       className="text-white italic border-solid border-b border-white px-2 py-1 rounded-md shadow-lg
       transform hover:translate-y-1 active:translate-y-0 transition-transform duration-200"
      onClick={() => navigate("/About")}
    >
      About Us
    </button>
    <button 
      className="text-white italic border-solid border-b border-white px-2 py-1 rounded-md shadow-lg
       transform hover:translate-y-1 active:translate-y-0 transition-transform duration-200"
      onClick={() => navigate("/ContactUs")}
    >
      Contact Us
    </button>
    <button 
      className="text-white italic border-solid border-b border-white px-2 py-1 rounded-md shadow-lg
       transform hover:translate-y-1 active:translate-y-0 transition-transform duration-200"
      onClick={() => navigate("/Dark")}
    >
      List of registered orphanages
    </button>
  </div>
</div>

      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-blue-200 bg-opacity-75 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform lg:hidden`}
        onClick={() => setIsOpen(false)}
      >
        <div className="fixed inset-y-0 left-0 w-64 bg-blue-900 p-4">
          <div className="flex items-center justify-between mb-8">
            <div className="text-white text-xl font-bold">TaBaraCOM</div>
            <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav>
          <button className="text-white px-3 py-2 rounded w-full text-left mb-2"
             onClick={() => navigate("/Home")}>Home</button>
            <button className="text-white px-3 py-2 rounded w-full text-left mb-2"
             onClick={() => navigate("/About")}>About US</button>
            <button className="text-white px-3 py-2 rounded w-full text-left mb-2"
              onClick={() => navigate("/ContactUs")}>Contact Us</button>
            <button className="text-white px-3 py-2 rounded w-full text-left mb-2"
             onClick={() => navigate("/Dark")}>List of registered orphanages</button>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



