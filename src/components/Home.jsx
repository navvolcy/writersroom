import React from "react";
import logo from './../assets/NewWR.jpg'
import profile from './../assets/Navi.JPG'


const Home = () => {
    return(
        <div className="flex items-center gap-x-10 p-10" >
            <div className=" p-4">
             <img  src={logo} alt="main page"/> 
            </div>
            <div className="object-contain h-1669 w-672 p-4 ">
                <img  src={profile} alt="profile pic"/>
            </div>
            
        </div>

    )
}

export default Home;