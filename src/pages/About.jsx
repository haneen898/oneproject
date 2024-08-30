import React from 'react';
import Navbar from '../layout/NavBar';
import Footer from '../layout/Footer';

function AboutMission() {
  
  return (
    <>
    <Navbar/>
    
    <div className="relative w-full min-h-screen p-9 mr-11">
  <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30" 
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/15/d5/3a/15d53af45e1d9c6d7c92799161fd226b.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
  </div>
  
  <div className="relative w-full min-h-screen grid md:grid-cols-2 gap-8">
    <div className="flex justify-center">
      <img 
        src="https://www.myhlblog.com/wp-content/uploads/2023/05/13-Ways-To-Volunteer-In-Your-Community-Image-1.jpg" 
        alt="Hands with red paint" 
        className="w-full h-auto object-cover shadow-lg"
      />
    </div>

    <div className="flex flex-col justify-center">
      <div className="mb-8">
        <h2 className="text-blue-800 text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-gray-900 italic">
        Our mission is to foster a compassionate and supportive community where everyone has the opportunity to thrive. We strive to bridge the gap between those in need and those who want to make a difference. By providing a transparent and efficient platform,
         we empower individuals and organizations to contribute to meaningful causes and create a lasting positive impact on society.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-blue-800 text-2xl font-bold mb-2">Our Vision</h2>
        <p className="text-gray-900 italic">
        To provide food, clothing, shelter, education,
         and support services to 1,000 children in need within the next five years
        </p>
      </div>
      <div>
        <h2 className="text-blue-800 text-2xl font-bold mb-2">Why Do We Do This</h2>
        <p className="text-gray-900 italic">
        Our commitment to helping the poor stems from a deep belief in equality and compassion,
         We strive to create a world where everyone has the opportunity to thrive, regardless of their circumstances.
        </p>
      </div>
    </div>
  </div>
</div>

    <Footer/>
    </>
   
  );
}

export default AboutMission;