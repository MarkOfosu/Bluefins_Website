import React from "react";
import mark from '../image/image-Mark.jpeg'; 
import desmond from '../image/image-Desmond.jpeg'; 
import classes from '../styles/coaches.module.css'

const CoachesPage = () => {
    return (
        <div className={classes.coaches_container}>
            <h1 className={classes.header}>Coaches</h1>
            <div className={classes.single_coach_container}>
                <img src={mark} alt='MarkPhoto'></img>
                <h2 id="coachesName">Mark Ofosu</h2>
                <p>Mark started his swimming career as a student at the University of Ghana, Legon. He was the swim captain of the university swim team for 3 years. He also is a Ghana National Swimmer and Ghana National Triathlete. He has participated in some prestigious meets, including the 2015 Pan-African Games in the Congo and the 2015 Bilateral Games at the University of Ibadan, Nigeria. Mark has a passion for swimming and teaching this important skill to others. He is a FINA level 2 swim coach, a certified lifeguard, and an ITU (International Triathlon Union) level 1 coach. He enjoys interacting with his swimmers, but also knows when he needs to be strict! He is easy-going, open to new ideas, hardworking, and motivated.</p>
            </div>
           
            <div className={classes.single_coach_container}>
                <img src={desmond} alt='DesmondPhoto'></img>
                <h2 id="coachesName">Desmond</h2>
                <p>Desmond joined Ghana BlueFins in early 2017 as a swim coach and previously worked with Finishline Swimming Academy in 2015. He was a competitive swimmer for the University of Ghana and graduated from the university with a degree in Sociology. He continues to swim competitively for Ghana BlueFins at swim meets in addition to being a coach. He has many hobbies, one of which includes learning new languages (he can speak 8 different languages!). His ability to speak French, English, and ASL (American Sign Language) make him invaluable when teaching foreigners and the deaf to swim. Desmond enjoys teaching swimming and loves finding ways to help swimmers reach their goals. Desmond is a FINA level 2 swim coach.</p>
            </div>
           
        </div>
    )
}

export default CoachesPage;