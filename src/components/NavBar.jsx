import React from "react";
import Home from './Home';
import About from './About';
import Episodes from './Episodes';

import { BrowserRouter as Router,
        Routes,
        Route,
        Link
  } from "react-router-dom";



const NavBar = () => {
    return(
        <div >
          
            <Router>
                <ul className='flex justify-end  items-end gap-x-10  text-2xl text-black-300 italic h-[50px]  bg-orange-400  px-8 py-4'>
                    
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                   
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Episodes">Episodes</Link>
                    </li>
                </ul>

                
                
                <Routes>
                    <Route exact path="/Home" element={<Home/>}/>
                    
                    <Route exact path="/About" element={<About/>}/>
                        
                    <Route exact path="/Episodes" element={<Episodes/>}/>

                    
                </Routes>
            </Router>
        </div>
    )

}

export default NavBar;