import React from 'react';
import  { useState,  useEffect } from "react";
import { useParams } from 'react-router-dom';

function Cuisine(props) {
      const [cuisine,setCuisine] = useState([]);
      let params =useParams()

    useEffect(() => {
     
        getCuisine(params.slug);
      
      }, [params.slug]);


     

     

      const getCuisine = async (name) => {
     
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
            const data = await api.json();   
        
      setCuisine(data.results);
      console.log(params.slug)
     
  
      };


    
    return (
        <div className='fullwidth'>

            <h1 className='text-3xl font-bold underline'>cuisine {params.slug}</h1>

            <div className="box_container">

            
              {cuisine.map(item => (

                <div key={item.id} className="box">
                    <img src={item.image} alt={item.title} />
                    <h2> {item.title}</h2>
                </div>      

                ))};

</div>


            
        </div>
    );
}

export default Cuisine;