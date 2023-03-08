import React from "react";
import {Route, Routes} from 'react-router-dom'

import MainNavigation from "./layouts/mainNavigation";
import AboutUsPage from "./pages/aboutUs";
import HomePage from "./pages/homePage";
import LocationPage from "./pages/location";
import CoachesPage from "./pages/coaches";
import StorePage from "./pages/store";


const App = () => {
return(
    <div>
       
      <MainNavigation />

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/aboutUs' element={<AboutUsPage />} />
            <Route path='/location' element={<LocationPage />} />
            <Route path='/store' element={<StorePage />} />
            <Route path='/coaches' element={<CoachesPage />} />
        </Routes>
    </div>
)
}

export default App;