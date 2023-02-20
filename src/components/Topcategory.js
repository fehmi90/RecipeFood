import React from 'react';
import { NavLink } from 'react-router-dom';


function Topcategory() {
    return (
        <div  className='container mx-auto flex justify-center'>
           <nav className='bg-sky-500/100'>
      
        <NavLink to="Cuisine/Italian"> Italian</NavLink>
        <NavLink to="Cuisine/Chinese">Chinese</NavLink>
        <NavLink to="Cuisine/African">African</NavLink>
      
      </nav>
        </div>
    );
}

export default Topcategory;