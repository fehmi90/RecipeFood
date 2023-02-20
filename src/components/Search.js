import React from 'react';
import  { useState } from "react";
import { useNavigate } from 'react-router';

function Search() {

    let navigate = useNavigate();
    


    

    const [searchInput, setSearchInput] = useState('');

    const handleSearchChange = (e) => {
        
        setSearchInput(e.target.value);
        e.preventDefault();
        navigate("/searched/" +searchInput);
    }

  





    return (
        <form onSubmit={handleSearchChange}>
        <div>

              <input 
                placeholder='Search...'
                onChange={handleSearchChange}
                className="form_search"
                value={searchInput}
                type='search'
                />

             
        </div>      
        </form>
    );
   
    
   
}



export default Search;