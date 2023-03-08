import React, {useState, useEffect} from "react";
import SearchBox from "../components/search-box/search-box.component";
import CoachesData from "../components/coaches-data/coachesData";

import classes from '../styles/coaches.module.css';


const CoachesPage = () => {
    //turn coaches object into array of objects
    const coachesArray = Object.values(CoachesData);

    const [coaches, setCoaches] = useState(coachesArray);
    const [searchField, setSearchField] = useState('');
    const [filteredCoaches, setFilteredCoaches] = useState(coachesArray);

    useEffect(() => {
        setCoaches(coachesArray);
    }, [])

    const handleSearchChange = (event) =>{
        const searchFieldVal = event.target.value.toLowerCase();
        setSearchField(searchFieldVal);
    } 

    useEffect(() => {
        const filteredCoaches = coaches.filter((coach) => {
            return coach.name.toLowerCase().includes(searchField);
        });
        setFilteredCoaches(filteredCoaches);
    }, [coaches, searchField]);
     
    //reutn a div for each coach with their image, name,title and short info
    return (
        <div className={classes.coaches_list}>   
            <div>
                <SearchBox 
                type='search'
                placeholder='Search Coach'
                onChangeHandler={handleSearchChange}
                />  
             </div> 
                
            {filteredCoaches.map((coach) => (
            
                    <div className ={classes.coaches_card} key={coach.id}>
                        <img src={coach.image} alt="coach" />
                        <h1>{coach.name}</h1>
                        <h3>{coach.title}</h3>
                        <p>{coach.shortInfo}</p> 
                    </div>
                )
            )}    
        </div>
    )
}

export default CoachesPage;