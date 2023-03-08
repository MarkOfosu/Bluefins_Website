
import React from "react";
import './search-box.style.css'


const  SearchBox = (props) => {

   const {type, onChangeHandler, placeholder} = props;
    //destructure search props here

        return(
            <div className="search-box"> 
                <input type={type}  placeholder={placeholder} onChange={onChangeHandler}/>
            </div>
        )

     

    
   
}

export default SearchBox;