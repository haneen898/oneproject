import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, buttonLabel, backgroundImage }) => {
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
            <h2 className="relative z-10 text-2xl font-semibold text-white mb-2">{title}</h2>
            <button
              className="relative z-10 bg-red-500 text-white shadow-md font-bold py-2 px-4 rounded-full hover:bg-red-600 hover:shadow-xl transition-colors"
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
              title="Education Projects in Iraq"
               buttonLabel="DONATE NOW"
                backgroundImage="https://modo3.com/thumbs/fit630x300/9969/1426082303/%D8%B7%D8%B1%D9%82_%D8%AA%D8%AF%D8%B1%D9%8A%D8%B3_%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84_%D9%81%D9%8A_%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9_%D9%88%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84.jpg"  
            />
            <Card
             title="Orphans Health Access Program"
              buttonLabel="DONATE NOW"
               backgroundImage="https://www.institutefornaturalhealing.com/wp-content/uploads/2021/04/iStock-1089976414.jpg"
            />
            <Card
             title="Food Assistance for Orphans"
              buttonLabel="DONATE NOW"
               backgroundImage="https://foodbanknwi.org/wp-content/uploads/sites/5/2015/03/Food_018.jpg"
            />
        </div>
    );
};

export default Carddonate;
