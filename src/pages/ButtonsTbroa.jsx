import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layout/NavBar';
import Footer from '../layout/Footer';

const ButtonsTbroaw = [
  'Clothes',
  'Food',
  'Furniture',
  'Tourist trip',
  'Electrical Appliances',
  'Education and training courses',
  'Medicine and health service',
  'Others'
];

function ButtonsTbroa() {
  let navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-r from-gray-200 to-indigo-100 min-h-screen flex flex-col md:flex-row justify-center items-center p-10">
      <div className=" p-8 flex flex-col items-center md:w-1/2 w-full">
        <h1 className="text-5xl text-red-600 font-bold mb-10 text-center">Donation</h1>
        <p className="text-center mb-4">
          Collaboration We allocate donation based on the projects we are currently working on
          <br />
          Thank you for your donation to support all members of our community in social trends.
        </p>
        <img
          src="https://www.thesimplicityhabit.com/wp-content/uploads/2023/03/40.jpg"
          alt="Donation"
          className="w-max h-80 object-cover rounded-lg mb-4"
        />
      </div>
      <div className=" p-6 md:w-1/2 w-full">
        <div className="grid grid-cols-2 gap-4">
          {ButtonsTbroaw.map((title, index) => (
            <button
              key={index}
              className="bg-blue-600 text-white font-bold py-2 rounded shadow-md hover:bg-blue-700 hover:shadow-blue-900 h-20 md:hover:shadow-blue-900"
              onClick={() => navigate("/Input")}
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default ButtonsTbroa;







