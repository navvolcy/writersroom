import React from "react";
import profile from './../assets/Navi.JPG';


const About  = () => {
    return(
    <div className="items-center gap-x-10 p-10 bg-repeat">
        <div className="object-cover bg-orange-400 p-10">
            <img  src={profile} alt="profile pic"/> 
        </div>  
    </div>

    )
}

export default About;