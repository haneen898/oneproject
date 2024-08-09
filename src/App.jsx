import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import NavBar from './layout/NavBar'
import MyComponent from './component/Hero';
import Tbroacompount from './component/Tbroa';
import Sajelcompount from './component/Sajel'
import Doorcompount from './component/Door'
import Footer from './layout/Footer'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './component/HomePage';
import HeroCompount from './component/Hero';
import InputForm from './pages/Input';
import ButtonsTbroa from './pages/ButtonsTbroa';
import { Home } from '@mui/icons-material';
import SajelDarak from './pages/SajelDark'
import DonationForm from './pages/Others'
import OrphansTable from './pages/Dark';
import Carddonate from './component/Card';
import AboutMission from './pages/About';
import AboutUS from './component/AboutUS';
import SignIn from './component/auth/Signin';
import SignUp from './component/auth/Signup';
import ContactDetails from './pages/ContactUs'
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
          <Route path='/Tbnew' element={<ButtonsTbroa/>}></Route>
          <Route path='/SajelDark' element={<SajelDarak/>}></Route>
          <Route path='/Others' element={<DonationForm/>}></Route>
          <Route path='/Dark' element={<OrphansTable/>}></Route>
          <Route path='/Card' element={<Carddonate/>}></Route>
          <Route path='/About' element={<AboutMission/>}></Route>
          <Route path='/ContactUs' element={<ContactDetails/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/Signin' element={<SignIn/>}></Route>
          </Routes>
   
          </BrowserRouter> 
     
     


    </>
  );
}

export default App;