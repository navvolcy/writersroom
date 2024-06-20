import React, {Component} from "react";
import logo from '../assets/NewWR.jpg'

class Podcast extends Component {

    render(){
        return (
            <div>
                <img
                    src={logo}
                    alt=" Avatar"
                    width='240px'
                />
                <div>
                    <h3>Episode 1</h3>
                </div>
            </div>
        )
    }
}

export default Podcast;