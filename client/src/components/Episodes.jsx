
import React from "react"; 
import PodcastItems from "./PodcastItems";
import { useState } from "react";





//list of episodes will come form

const Episodes = () => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    const[room, setRoom] = useState(
        {   Episode:"1",
            Date:formattedDate,
            Details:" hello ",
        }
    );
   
  
    //controller that updating the value on the search bar
    const handleEpisodes = (event) =>{
        const epValue = event.target.value;
        const numeEpValue = epValue.replace(/[^0-9]/g, '');
        
        setRoom(prev =>({
            ...prev,
            Episode:numeEpValue,
        }));
    }
    

    
    //fetch will make an api call to go into the DB and get the season/episode number 
    const fetchEpisode = async() => {


    }

    return (
        <div>
            <div className=" flex flex-col justify-center items-center h-screen  ">
                <div className="flex flex-col justify-center items-center m-4">
                    <p className='text-4xl italic inline text-center'>Episodes</p>
                    <p  className="py-4 text-2xl">Writer's Room </p>
                </div>
                <div className="text-center mb-8">
                    <input className="px-4  max-h-full" type='text' value={room.episode} maxLength={2} onChange={handleEpisodes}/>
                </div>
                <div className="m-8">
                    <PodcastItems 
                    episode={room.Episode} 
                    date={room.Date}
                    details={room.Details}/>
                </div>
                <div className="text-center p-4 ">
                    <button  className="border italic font-bold bg-orange-400
                    text-black cursor-pointer text-xl px-8 pb-4
                    hover:bg-rose-400 active:bg-pink-900 focus:outline-none 
                    focus:ring focus:ring-pink-700 rounded-full shadow-md shadow-[#040c16] 
                    hover:scale-110 duration-500" onClick={fetchEpisode}> 
                            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                        </svg>
                        Search</button>
                </div>
                <div className="flex justify-between items-center text-center py-8">
                    
                </div>


                </div>
        </div>
    )
}

export default Episodes;