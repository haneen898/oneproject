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
        <h2 className="text-blue-600 text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-gray-700">
          Facilitates your donation if you are interested in educating orphans,
          caring for and volunteering for them, you have nothing to pay and no money to apply. We are here to help you.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-blue-600 text-2xl font-bold mb-2">Our Vision</h2>
        <p className="text-gray-700">
          Choose your donation and register with us. If you want to build a beautiful future for orphaned children in the field of education, 
          take care of their health and take care of them is fully formed, and you have nothing to pay and no money to apply be with us.
        </p>
      </div>
      <div>
        <h2 className="text-blue-600 text-2xl font-bold mb-2">Why Do We Do This</h2>
        <p className="text-gray-700">
          We loved to be a trusted name to help the poor, we are working on this project to make the world equal for all.
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