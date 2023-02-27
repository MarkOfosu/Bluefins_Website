import React from "react";
import classes from '../styles/homePage.module.css'
// import Images from  '../image/images.js'
import backgroundImage from '../image/image2.jpg'; 


function HomePage() {
    // <img src={Images.backgroundImage} alt='backgroundImage'></img>
    return (

        <div className={classes.home}>
            <img src={backgroundImage} alt=''></img>
            <h1>Home Page</h1>
        </div>

    );
}

export default HomePage;