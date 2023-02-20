
import React from 'react';

import  { useState,  useEffect } from "react";




function Vegeteral() {


    const [vegeterals,setvegeterals] = useState([]);
   

    useEffect(() => {
     
        getVegeteral();
      }, []);

     
      const getVegeteral = async () => {
     
       const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4&tags=vegetarian`);
      const data = await api.json();   
      
      setvegeterals(data.recipes);
      console.log(data)
  
      };



    return (
        <div className="full_container">
          <h2 className="text-3xl">Vegeterian Recipes</h2>

           
          <div className="box_container">
       
           
          {vegeterals.map(vegeteral => (

            <div key={vegeteral.id} className="box">
                 <img src={vegeteral.image} alt={vegeteral.title} />
               <h2> {vegeteral.title}</h2>
           
            
            </div>
             
             

          ))};
    



          
        </div>
        </div>

        
    );
}

export default Vegeteral;