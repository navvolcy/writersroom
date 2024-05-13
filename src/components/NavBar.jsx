import React from "react";
import Home from './Home';
import About from './About';
import Channel from './Channel';
import { BrowserRouter as Router,
        Routes,
        Route,
        Link
  } from "react-router-dom";



const NavBar = () => {
    return(
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Channel">Channel</Link>
                    </li>
                </ul>

                <hr/>
                <Routes>
                    <Route exact path="/Home" element={<Home/>}/>
                    
                    <Route exact path="/About" element={<About/>}/>
                        
                    <Route exact path="/Channel" element={<Channel/>}/>

                    
                </Routes>
            </Router>
        </div>
    )

}

export default NavBar;