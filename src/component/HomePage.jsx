
import React from 'react';
import HeroCompount from './Hero';
import TbroaComponent from './Tbroa';
import SajelComponent from './Sajel';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';
import Carddonate from '../component/Card';
import AboutUS from '../component/AboutUS';


const HomePage = () => {
  
  return (
   <>
   
  <NavBar/>

  
   <HeroCompount/>
    <Carddonate/>
    <AboutUS/>
   <TbroaComponent/>
   <SajelComponent/>
   
  
    <Footer/>
   
   </>

  
  );
};

export default HomePage;
