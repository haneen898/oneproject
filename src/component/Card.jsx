import React from 'react';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Card = ({ icon, title, buttonLabel, backgroundImage }) => {
    let navigate = useNavigate();
    return (
        <div
            className="relative flex flex-col items-center justify-center text-center p-20 m-4 mt-12 bg-cover bg-center rounded-lg shadow-md hover:shadow-xl"
            style={{
             backgroundImage: `url(${backgroundImage})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
            }}>
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="relative z-10 mb-4">{icon}</div>
            <h2 className="relative z-10 text-2xl font-semibold text-white mb-2">{title}</h2>
            <button
              className="relative z-10 bg-red-500 text-white shadow-md py-2 px-4 rounded-full hover:bg-red-600 hover:shadow-xl transition-colors"
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
                backgroundImage="https://media2.ledevoir.com/images_galerie/nwd_1463064_1122500/image.jpg"  
            />
            <Card
            icon={<HealthAndSafetyIcon className='text-white size- text-4xl'/>}
             title="Offer health services to orphans"
              buttonLabel="DONATE NOW"
               backgroundImage="https://www.institutefornaturalhealing.com/wp-content/uploads/2021/04/iStock-1089976414.jpg"
            />
            <Card
            icon={<FastfoodIcon className='text-white text-4xl' />}
             title="Offer food services to orphans"
              buttonLabel="DONATE NOW"
               backgroundImage="https://underscore.factor75.com/wp-content/uploads/2020/03/2-1.png"
            />
        </div>
    );
};

export default Carddonate;

