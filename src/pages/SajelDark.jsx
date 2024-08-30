import React from "react";
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';

function SajelDarak() {

  return (
    <>
    <NavBar/>
    <div className="bg-gradient-to-r from-gray-300 to-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center mt-10">

        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
          <img src="https://th.bing.com/th/id/OIP.Eb-PvqrAJmIIY4J_reonQQHaEv?rs=1&pid=ImgDetMain" alt="Children"className="w-full object-cover rounded-lg"/>
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4 text-red-600 text-center md:text-left text-black-600">Sign up DARAK</h2>
          <form className="w-full space-y-4" action='https://formspree.io/f/mpzvkjvb' method='post'>
            <div>
              <label className="block text-gray-700 text-left mb-1">Name DARAK:</label>
              <input type="text" name="Name DARAK:" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800" />
            </div>
            <div>
              <label className="block text-gray-700 text-left mb-1">Address:</label>
              <input type="text" name="Address:" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800" />
            </div>
            <div>
              <label className="block text-gray-700 text-left mb-1">Number of orphans:</label>
              <input type="number" name="Number of orphans:" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800" />
            </div>
            <div>
              <label className="block text-gray-700 text-left mb-1">Phone Number:</label>
              <input type="tel" name="Phone Number:" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800" />
            </div>
            <div>
              <label className="block text-gray-700 text-left mb-1">Email:</label>
              <input type="email" name="Email:" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800" />
            </div>
            <div>
              <label className="block text-gray-700 text-left mb-1">Registration Papers:</label>
              <input type="file" name="Registration Papers:" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800" accept=".pdf" />
            </div>
            <button type="submit" className="w-full hover:bg-blue-700 flex items-center justify-center px-6 py-2 bg-blue-800 text-white rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 focus:outline-none" >
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
                >
                </path>
              </svg>
              <span>Send</span>
            </button>
          </form>
             <p className="text-center text-blue-800 md:text-left mt-4">The DARAK will be visited upon arrival of the request</p>
         </div>
        </div>
       </div>
    <Footer/>
    </>
    
  );
}

export default SajelDarak;
