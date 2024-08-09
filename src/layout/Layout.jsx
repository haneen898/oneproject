import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ Children }) => {
 return(
    <div>
      <header>
       <NavBar/>
    {Children}
    <Footer/>   
      </header>
     
    </div>
    
    
 )
}

export default Layout;