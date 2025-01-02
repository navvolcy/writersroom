import React from "react";
import profile from '../assets/Navi.JPG';



const About  = () => {
    return(
    <div className="flex h-screen ">
        <div>
        <div className="p-4 mt-20">
            <img className=" rounded-full" src={profile} alt="profile pic"/> 
        </div>
        
        </div>
        <div className="m-10 text-3xl flex-1 ">
            <div className=" text-center">
                <p className="text-3xl  font-bold italic">
                    About
                </p>  
            </div>
            <div>
            <   p className="text-2xl italic m-10 ">
                    Hello and welcome to th online page to my podcast where you can do listen and enjoy a collection of the Writer's Rooms best interviews and conversation. Be sure to 
                    tune in on my live podcast Monday, Wednseday , and Friday  4pm PST. See you there!!!
                </p>
            </div>
            
        </div>
        

    </div>

    )
}

export default About;