import React from 'react';
import { Link } from 'react-router-dom';
import icon from '@mui/icons-material'
import Navbar from '../layout/NavBar';
import Footer from '../layout/Footer';

function ContactDetails() {
  return (
    <>
    <Navbar/>
    <div 
      className="min-h-screen bg-gray-100 flex items-center justify-center p-6 relative" 
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/15/d5/3a/15d53af45e1d9c6d7c92799161fd226b.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative bg-white rounded-lg shadow-lg p-8 flex flex-wrap max-w-4xl w-full">
        <div className="mt-12 w-full md:w-1/2 p-4">
          <h2 className="text-blue-600 text-2xl font-bold mb-4">Get in Touch With Us</h2>
          <p className="text-gray-600 mb-8">
            Aliq is notm hendr erit a augue insu image pellen tes que id erat
            quis sollicitud. Lorem ipsum is simply free text dolor sit amet,
            consectetur adipiscing ullam blandit hendrerit faucibus suspendisse.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <form className="space-y-4" action='https://formspree.io/f/mpzvkjvb' method='post'>
            <div>
              <label className="block text-gray-700">Your Name</label>
              <input type="text"name='Your Name'className="w-full p-2 border border-gray-300 rounded"/>
            </div>
            <div>
              <label className="block text-gray-700">Your Eamil</label>
              <input type="email"name='Your Email'className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Your Subject</label>
              <input type="text"name='Your Subject'className="w-full p-2 border border-gray-300 rounded"/>
            </div>
            <div>
              <label className="block text-gray-700">Your message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded" name="Your message" rows="4" ></textarea>  
            </div>
            <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default ContactDetails;

