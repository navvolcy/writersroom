import React from "react";
import { BrowserRouter as Router,
        Switch,
        Route,
        Link
  } from "react-router-dom";


const NavBar = () => {
    return(
        <div>
            <Router>
                <ul>
                    <li>
                        home 
                    </li>
                    <li>
                        about 
                    </li>
                    <li>
                        Channel
                    </li>
                </ul>

                <hr/>
                <Switch>
                    <Route exact path="/">

                    </Route>
                    <Route exact path="/">

                    </Route>
                    <Route exact path="/">
                        
                    </Route>
                    
                </Switch>
            </Router>
        </div>
    )

}

export default NavBar;