import React from 'react';
import {useEffect} from 'react';
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import Home from './pages/Home';
import Cuisine from './pages/Cuisine';
import Searched from './pages/Searched';
import Boxdetails from './pages/Boxdetails';
import   './index.css';
import Topcategory from './components/Topcategory';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Search from './components/Search';
import Logo from './logo-dark.png';
import { Link } from 'react-router-dom';


function App() {

  useEffect(() => {
    
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
 
  return (
    <div className="App">
      
      <BrowserRouter>
      <Link to="/" className='logo'>
         <img src={Logo} alt='Logo' />
        </Link>
     
      <Topcategory/>
      <Search/>
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  exact path="/Cuisine/:slug" element={<Cuisine />} />
            <Route  exact path="/Searched/:search" element={<Searched />} />
            <Route  exact path="/Boxdetails/:Id" element={<Boxdetails />} />



          </Routes>
         
      </BrowserRouter>

      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
         
          fontSize: '40px',
          bottom: '40px',
          right: '40px',
          background:'none',
          border:'none',
          cursor:'pointer',
         
          color: '#ff4a52',
          textAlign: 'center',
        }}
      >
       < BsFillArrowUpCircleFill />
      </button>
            
   

    </div>
  );
}

export default App;
