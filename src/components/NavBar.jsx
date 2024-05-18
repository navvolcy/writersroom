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
                <ul className='md:flex gap-x-10  text-black-300 italic h-[50px]  bg-orange-400  px-10'>
                    
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

                <hr className="  py-5"/>
                
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