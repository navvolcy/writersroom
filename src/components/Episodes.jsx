import React from "react"; 
import Podcastlist from "./Podcastlist";




const Episodes = () => {
    return (
        <div>
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="w-full flex justify-center items-center flex-col mb-7">
                    <p className='text-4xl  italic inline border-b-4 border-cyan-500 text-center'>Episodes</p>
                    <p  className="py-4 text-2xl">Writer's Room </p>
                </div>
                <div className="text-center">
                    <input className="px-4  max-h-full"/>
                </div>
                <div className="text-center p-4">
                <button  className="italic font-serif bg-[#06110d] text-[white] cursor-pointer w-1/4 mx-0 my- px-5  hover:bg-pink-800 active:bg-pink-900 focus:outline-none focus:ring focus:ring-pink-700 rounded-full"> 
                        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    </svg>
                    Search</button>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <Podcastlist/>
                </div>


                </div>
        </div>
    )
}

export default Episodes;