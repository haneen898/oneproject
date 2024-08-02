
import React from 'react';
import HeroCompount from './Hero';
import TbroaComponent from './Tbroa';
import SajelComponent from './Sajel';
import Doorcompount from './Door'
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';
import Carddonate from '../component/Card';
import AboutUS from '../component/AboutUS'


const HomePage = () => {
  
  return (
   <>
   <nav>
  <NavBar/>
   </nav>
  
   <HeroCompount/>
    <Carddonate/>
    <AboutUS/>
   <TbroaComponent/>
   <SajelComponent/>
   {/* <Doorcompount/> */}
   
  
   <footer>
    <Footer/>
   </footer>
   </>

  
  );
};

export default HomePage;
