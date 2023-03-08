import React from "react"

import ImageMark from '../../image/imageMark.jpeg'; 
import ImageDesemond from '../../image/image-Desmond.jpeg'; 
import ImageGeneral from '../../image/image-General.jpg'; 
import ImageAkonto from '../../image/image-Akonto.jpg'; 




const CoachesData={
    Mark:{
      name:'Mark Ofosu',
      title: 'Head Swim Coach',
      id: 1001,
      image: ImageMark,
      shortInfo: "Mark started his swimming career as a student at the University of Ghana, Legon. He was the swim captain of the university swim team for 3 years. He also is a Ghana National Swimmer and Ghana National Triathlete. He has participated in some prestigious meets, including the 2015 Pan-African Games in the Congo and the 2015 Bilateral Games at the University of Ibadan, Nigeria. Mark has a passion for swimming and teaching this important skill to others. He is a FINA level 2 swim coach, a certified lifeguard, and an ITU (International Triathlon Union) level 1 coach. He enjoys interacting with his swimmers, but also knows when he needs to be strict! He is easy-going, open to new ideas, hardworking, and motivated."
      },
      Desmond: {
          name: 'Desmod Amponsah',
          title: 'Head Swim Coach',
          id: 1002,
          image: ImageDesemond,
          shortInfo: "Desmond joined Ghana BlueFins in early 2017 as a swim coach and previously worked with Finishline Swimming Academy in 2015. He was a competitive swimmer for the University of Ghana and graduated from the university with a degree in Sociology. He continues to swim competitively for Ghana BlueFins at swim meets in addition to being a coach. He has many hobbies, one of which includes learning new languages (he can speak 8 different languages!). His ability to speak French, English, and ASL (American Sign Language) make him invaluable when teaching foreigners and the deaf to swim. Desmond enjoys teaching swimming and loves finding ways to help swimmers reach their goals. Desmond is a FINA level 2 swim coach."    
      },

      General:{
          name: 'General Dolphin',
          title: 'Lead Age Group Coach',
          id: 1003,
          image: ImageGeneral,
          shortInfo: "Short info here"
          
      },
    
       Gideon:{
          name: 'Gideon',
          title: 'Lead Age Group Coach',
          id: 1004,
          image: '',
          shortInfo: "Short info here"

       },
       Akonto:{
          name: 'Akonto',
          title: 'Assistant Lead Age Group Coach',
          id: 1005,
          image: ImageAkonto,
          shortInfo: "Short info here"

       }

  }
  export default CoachesData;