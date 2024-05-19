import React from "react";
import profile from './../assets/Navi.JPG';


const About  = () => {
    return(
    <div className="items-center gap-x-10 p-10 ">
        <div className="grid sm:grid-cols-2 object-cover bg-orange-400 p-10">
            <div>
            <img  src={profile} alt="profile pic"/> 
            </div>
            <div className="sm:text-left text-4xl  italic">
                <p>
                    Hello  world
                </p>
                
            </div>
        </div>  

    </div>

    )
}

export default About;