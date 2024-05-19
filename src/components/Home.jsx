import React from "react";
import logo from './../assets/NewWR.jpg';
import BG from './../assets/BG-repeat.jpg';


const Home = () => {
    return(
        <div className=" gap-x-10 p-10" style={{ backgroundImage:`url(${BG})`}}>
            <div className="bg-orange-400 py-14 px-10">
             <img className="items-center" src={logo} alt="main page"/> 
            </div>   
        </div>

    )
}

export default Home;