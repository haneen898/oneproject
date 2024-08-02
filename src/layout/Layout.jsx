
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({ Children }) => {
 return(
    <div className='flex flex-col min-h-100vh'>

    <NavBar/>
    {Children}
    <Footer/>  
    </div>
    
    
 )
}

export default Layout;