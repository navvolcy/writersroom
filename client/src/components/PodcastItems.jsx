import React, {Component} from "react";
import logo from '../assets/NewWR.jpg'


class PodcastItems extends Component {
   

    

    render(){
        return (
            <div className="m-4 p-4 border rounded-lg shadow-md border-neutral-300 overflow-clip bg-orange-400">
                <div></div>
                <img 
                    className="rounded-full"
                    src={logo}
                    alt=" Avatar"
                    width='240px'
                />
                <div>
                    <button>
                        <i className="fa-solid fa-play"></i>
                    </button>
                </div>
                <div className="flex justify-center mt-4">
                    <h3 className="text-xl font-bold italic">
                        Episode 1
                    </h3>
                </div>
            </div>
        )
    }
}

export default PodcastItems;