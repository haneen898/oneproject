import React from 'react';
import Navbar from '../layout/NavBar';
import Footer from '../layout/Footer';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


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
          <p className=" text-gray-600 mb-8">
            Have questions? Need help? Contact us
            Ready to donate? Let's talk
            Connect with our team. We're here to answer your questions and guide you through the donation process.
             Want to learn more? Get in touch to discover how your donation can make a difference.
             Let's make a difference together. Contact us to learn more about our mission.
              Reach out and join our community of donors.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/haneen-mansoor-905b76245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-red-500">
             <LinkedInIcon/> <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/haneen.mansoor.90?mibextid=LQQJ4d" className="text-blue-500">
             <FacebookIcon/> <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/design__front23?igsh=bW90eWhtbGdzNzh2&utm_source=qr" className="text-yellow-500">
            <InstagramIcon/> <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/haneen898" className="text-purple-500">
             <GitHubIcon/> <i className="fab fa-gitHub"></i>
            </a>
          </div>
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

