import React from 'react';
import  { useState,  useEffect } from "react";
import { useParams } from 'react-router-dom';



const Searched = () => {

    const [SearchRecipes,setSearchRecipes] = useState([]);
    let params =useParams()
   

    useEffect(() => {
     
        getSearched(params.search);
      }, [params.search]);


       
      const getSearched = async (rec) => {
     
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=4&query=${rec}`);
       const data = await api.json();   
       
       setSearchRecipes(data.results);
       console.log(data)
   
       };



    return (
        <div className="fullwidth">
                    <div className="box_container">
                    <h1> searched   {params.search}</h1>
            
{SearchRecipes.map(SearchRecipe => (

  <div key={SearchRecipe.id} className="box">
      <img src={SearchRecipe.image} alt={SearchRecipe.title} />
      <h2> {SearchRecipe.title}</h2>
  </div>      

  ))};

</div>

        </div>
    );
};

export default Searched;