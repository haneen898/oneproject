import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ icon, title, buttonLabel, bgImage }) => {
    let navigate = useNavigate();
  return (
    <div
      className="bg-orange-100 relative flex flex-col items-center justify-center text-center p-20 m-4 bg-cover bg-center rounded-lg shadow-md hover:shadow-xl"
      style={{backgroundImage:'https://cdn.sitepreview.co/assets/uploads/sites/627/2022/09/iStock-1312767508.jpg' , bgImage }}
      >
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="relative z-10 mb-4">{icon}</div>
      <h2 className="relative z-10 text-2xl font-semibold text-white mb-2">{title}</h2>
      <button className="relative z-10 bg-red-500 text-white shadow-md font-bold py-2 px-4 rounded-full hover:bg-red-600 hover:shadow-xl transition-colors"
      
      onClick={() => navigate("/Others")}
      >
        {buttonLabel}
      </button>
    </div> 
  );
};

const Carddonate = () => {
  return (
    <div className=" bg-orange-100 flex flex-col md:flex-row">
      <Card
        icon={<i className="fas fa-graduation-cap fa-2x text-white"></i>}
        title="Education Projects in Iraq"
        buttonLabel="DONATE NOW"
        bgImage="https://via.placeholder.com/600x400"
      />
      <Card
        icon={<i className="fas fa-pills fa-2x text-white"></i>}
        title="Orphans Health Access Program"
        buttonLabel="DONATE NOW"
        bgImage="https://cdn.sitepreview.co/assets/uploads/sites/627/2022/09/iStock-1312767508.jpg"
      />
      <Card
        icon={<i className="fas fa-utensils fa-2x text-white"></i>}
        title="Food Assistance for Orphans"
        buttonLabel="DONATE NOW"
        bgImage="https://cdn.sitepreview.co/assets/uploads/sites/627/2022/09/iStock-1312767508.jpg"
      />
    </div>
  );
};

export default Carddonate;