import React from 'react';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Card = ({ icon, title, buttonLabel, backgroundImage }) => {
    let navigate = useNavigate();
    return (
        <div
            className="relative flex flex-col items-center justify-center text-center 
            p-20 m-4 mt-12 bg-cover bg-center rounded-lg shadow-md hover:shadow-xl"
            style={{
             backgroundImage: `url(${backgroundImage})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
            }}>
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="relative z-10 mb-4">{icon}</div>
            <h2 className="relative z-10 text-2xl font-semibold text-white mb-2">{title}</h2>
            <button
              className="relative z-10 bg-red-500 text-white shadow-md py-2 px-4 rounded-full
               hover:bg-red-600 hover:shadow-xl transition-colors"
                onClick={() => navigate("/Others")} >
                {buttonLabel}
            </button>
        </div>
    );
};

const Carddonate = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <Card 
             icon={<SchoolIcon className="text-white text-4xl" />}
              title="Offer education service to orphans"
               buttonLabel="DONATE NOW"
                backgroundImage="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201612/647_120616041123.jpg"  
            />
            <Card
            icon={<HealthAndSafetyIcon className='text-white size- text-4xl'/>}
             title="Offer health services to orphans"
              buttonLabel="DONATE NOW"
               backgroundImage="https://www.unicef.org/iraq/sites/unicef.org.iraq/files/styles/large/public/UNI218436_0.jpg.webp?itok=XMW-a_e3"
            />
            <Card
            icon={<FastfoodIcon className='text-white text-4xl' />}
             title="Offer food services to orphans"
              buttonLabel="DONATE NOW"
               backgroundImage="https://webapi.project-syndicate.org/library/1e1af1c2ff1690e868f233b8be152811.jpg"
            />
        </div>
    );
};

export default Carddonate;

