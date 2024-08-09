import React from 'react';
import Navbar from '../layout/NavBar';

function AboutMission() {
  
  return (
    <>
     <div className=" max-w-7xl mx-auto pt-20 ml-20 mr-11">
      
      <div className=" min-h-screen grid md:grid-cols-2 gap-8">
       
        <div className="flex justify-center">
          <img 
            src="https://www.myhlblog.com/wp-content/uploads/2023/05/13-Ways-To-Volunteer-In-Your-Community-Image-1.jpg" 
            alt="Hands with red paint" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

       
        <div className="flex flex-col justify-center">
        <div className="mb-8">
            <h2 className="text-blue-600 text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-600">
            'Facilitates your donation if you are interested in educating orphans,
             caring for and volunteering for them, you have nothing to pay and no money to apply We are here to help you'           </p>
          </div>
          <div className="mb-8">
          <h2 className="text-blue-600 text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-gray-600">
            Choose your donation and register with us. If you want to build a beautiful future for orphaned children in the field of education, 
            take care of their health and take care of them is fully formed, and you have nothing to pay and no money to apply be with us            </p>
          </div>
          <div>
            <h2 className="text-blue-600 text-2xl font-bold mb-2">Why Do We Do This</h2>
            <p className="text-gray-600">
              We loved to be a trusted name to help the poor, we are working on this project to make the world equal for all
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default AboutMission;