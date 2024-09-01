import React from "react";
import logo from './../assets/NewWR.jpg';



const Home = () => {
    return(
        <div >
            <div className=" flex flex-col justify-center items-center p-4">
             <img  className="rounded-full" src={logo} alt="main page"/> 
            </div>    
        </div>

    )
}

export default Home;