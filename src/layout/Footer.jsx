import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  let navigate = useNavigate();
  return (
    <footer className="bg-blue-600 min-h-100vh text-white mt-8">
      <div className="container mx-auto py-2 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <p className="mb-2">2024 ©Frontend | by Haneen</p>
        </div>
        <button className="text-white border-solid border-b border-r-white hover:bg-blue-900 px-2 py-1 rounded-full"
               onClick={() => navigate("/Signup")}>SignUp</button>
      </div>
    </footer>
  );
};

export default Footer;