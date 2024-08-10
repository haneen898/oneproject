import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layout/NavBar';
import Footer from '../layout/Footer';

const ButtonsTbroaw = [
  'Clothes',
  'Education and training courses',
  'Electrical Appliances',
  'Medicine and health service',
  'Food',
  'Furniture',
  'Toys',
  'Tourist trip',
  'School Supplies',
  'Others'
];

function ButtonsTbroa() {
  let navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-r from-gray-200 to-indigo-100 min-h-screen flex flex-col md:flex-row justify-center items-center p-10">
      <div className=" p-8 flex flex-col items-center md:w-1/2 w-full">
        <h1 className="text-5xl text-red-600 font-bold mb-10 text-center">Donation</h1>
        <p className="text-center mb-4">
          Collaboration We allocate donation based on the projects we are currently working on
          <br />
          Thank you for your donation to support all members of our community in social trends.
        </p>
        <img
          src="https://www.thesimplicityhabit.com/wp-content/uploads/2023/03/40.jpg"
          alt="Donation"
          className="w-max h-80 object-cover rounded-lg mb-4"
        />
      </div>
      <div className=" p-6 md:w-1/2 w-full">
        <div className="grid grid-cols-2 gap-4">
          {ButtonsTbroaw.map((title, index) => (
            <button
              key={index}
              className="bg-blue-600 text-white font-bold py-2 rounded shadow-md hover:bg-blue-700 hover:shadow-blue-900 h-20 md:hover:shadow-blue-900"
              onClick={() => navigate("/Input")}
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default ButtonsTbroa;









// import React from 'react';
// import { useNavigate } from 'react-router-dom';


// const ButtonsTbroaw = [
//   'Clothes',
//   'Education and training courses',
//   'Electrical Appliances',
//   'Medicine and health service',
//   'food',
//   'furniture',
//   'Toys',
//   'Tourist trip',
//   'School Supplies',
//   'Others'
// ];


// function ButtonsTbroa () {

//   let navigte = useNavigate()
  
//   return (
    
//     <div className=" bg-blue-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
//         <h1 className="text-xl font-bold mb-4 text-center">Donation</h1>
//         <div className="grid grid-cols-2 gap-4">
//           {ButtonsTbroaw.map((title, index) => (
//             <button key={index} className="bg-blue-500 text-white py-2 rounded col-span-1 shadow-md hover:bg-blue-600 md:col-span-2"
//             onClick={
//               ()=> navigte("/Input")
//             }
//             >
//               {title}
//             </button>
//           ))}
//         </div>
        
//       </div>
//       <div className='bg-white rounded-lg shadow-lg p-8 max-w-md w-full'>
//         <div className=''>
//            <p className="text-center mt-4">
//         Collaboration We allocate donation based on the projects we are currently working on
//         <br/>
//         Thank you for your donation to support all members of our community in social trends.
//         </p> 
//         </div>
//         <div className="flex justify-center mt-4">
//           <img src='https://www.thesimplicityhabit.com/wp-content/uploads/2023/03/40.jpg' alt="Donation" className="w-62 h-32 object-cover rounded-lg" />
//         </div>
//       </div>
       

//     </div>
//   );
// }

// export default ButtonsTbroa;

