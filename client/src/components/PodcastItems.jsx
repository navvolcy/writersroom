import React, {Component} from "react";
import { useState } from "react";
import logo from '../assets/NewWR.jpg'


class PodcastItems extends Component {
   
    Title =() =>{
        




    }
    

    render(){
        return (
            <div className="m-4 p-4 border rounded-lg shadow-md border-neutral-300 overflow-clip bg-orange-400">
                
                <img 
                    className="rounded-full"
                    src={logo}
                    alt=" Avatar"
                    width='240px'
                />
                <div  className="flex justify-center mt-4">
                    <h3 className="text-xl font-bold italic">
                        Episode: 
                    </h3>
                </div>
                <div  className="flex justify-center mt-4">
                    <h3 className="text-xl font-bold italic">
                       Date:
                    </h3>
                </div>
                <div className="flex justify-center mt-4">
                    <h3 className="text-xl font-bold italic">
                        Details : 
                    </h3>
                </div>
            </div>
        )
    }
}

export default PodcastItems;