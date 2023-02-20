import  { useState,  useEffect } from "react";
import React from 'react';






function Popular() {


    const [recipes,setrecipes] = useState([]);
    

    useEffect(() => {
     
        getPopular();
      }, []);

     
      const getPopular = async () => {
     
       const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`);
      const data = await api.json();   
      
      setrecipes(data.recipes)
      console.log(data)
      
 
      };


     

    return (
        <div className="full_container">
          <h2 className="text-3xl font-bold underline">Popular Recipes</h2>

           

            <div className="box_container">
           
          {recipes.map(recipe => (

            <div key={recipe.id} className="box">
                 <img src={recipe.image} alt={recipe.title} />
               <h2> {recipe.title}</h2>
           
            
            </div>
             

          ))}
    



            </div>
        
        </div>

        
    );
}

export default Popular;