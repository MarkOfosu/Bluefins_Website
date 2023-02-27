import React from "react";
import classes from '../styles/mainNavigation.module.css';
import { Link } from 'react-router-dom';
import bluefinsLogo from '../image/bluefinsLogo.jpg'; 
// import backgroundImage from '../image/image1.jpg'; 



const MainNavigation = () => {
    return (
        
        <header className={classes.header}>
        <div className={classes.logo}>
        <img src={bluefinsLogo} alt='Logo' />

        </div>
        
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/aboutUs'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/location'>Location</Link>
                    </li>
                    <li>
                        <Link to='/store'>Store</Link>
                    </li>
                    <li>
                        <Link to='/coaches'>Coaches</Link>
                    </li>
                </ul>
            </nav>
            
      
        
        </header>
    

        
    )
}

export default MainNavigation;