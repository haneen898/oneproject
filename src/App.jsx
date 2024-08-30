
import './App.css';
import Tbroacompount from './component/Tbroa';
import Sajelcompount from './component/Sajel'
import Doorcompount from './component/Door'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './component/HomePage';
import HeroCompount from './component/Hero';
import InputForm from './pages/Input';
import ButtonsTbroa from './pages/ButtonsTbroa';
import SajelDarak from './pages/SajelDark'
import DonationForm from './pages/Others'
import OrphansTable from './pages/Dark';
import Carddonate from './component/Card';
import AboutMission from './pages/About';
import SignIn from './component/auth/Signin';
import SignUp from './component/auth/Signup';
import ContactDetails from './pages/ContactUs';
import DonationMake from './component/MakeDonation';


// import AuthDetails from './component/auth/AuthDetails';
// import firebase from './firebase';


function App() {
  return (
    <>
      

        <BrowserRouter>
     
        <Routes>
          
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/Home' element={<HomePage/>}></Route>
          <Route path='/Hero' element={<HeroCompount/>}></Route>
          <Route path='/Tbroa' element={<Tbroacompount/>}></Route>
          <Route path='/Sajel' element={<Sajelcompount/>}></Route>
          <Route path='/Door' element={<Doorcompount/>}></Route>
          <Route path='/Input' element={<InputForm/>}></Route>
          <Route path='/ButtonsTbroa' element={<ButtonsTbroa/>}></Route>
          <Route path='/SajelDark' element={<SajelDarak/>}></Route>
          <Route path='/Others' element={<DonationForm/>}></Route>
          <Route path='/Dark' element={<OrphansTable/>}></Route>
          <Route path='/Card' element={<Carddonate/>}></Route>
          <Route path='/About' element={<AboutMission/>}></Route>
          <Route path='/ContactUs' element={<ContactDetails/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/Signin' element={<SignIn/>}></Route>
          <Route path='/MakeDonation' element={<DonationMake/>}></Route>
          </Routes>
   
          </BrowserRouter> 
     
     


    </>
  );
}

export default App;