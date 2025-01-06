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
                <div className="flex justify-center bg-orange-400  px-4 py-1 text-xl text-black-300 italic">
                
                    <div className="flex justify-between w-full max-w-8xl">
                
                        <ul className='flex items-end gap-x-10  h-[50px] '>
                            
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

                        <button className=" justify-end  px-8 py-4 ">
                            
                            Sign-In
                        </button>
                    </div>
                </div>

                
                
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