import React from "react";
import logo from './../assets/Logo.jpg'
import profile from './../assets/Navi.JPG'


const Home = () => {
    return(
        <div className="flex ">
            <div className=" p-4">
             <img  src={logo} alt="main page"/> 
            </div>
            <div className="p-4 size-25">
                <img src={profile} alt="profile pic"/>
            </div>
            
        </div>

    )
}

export default Home;