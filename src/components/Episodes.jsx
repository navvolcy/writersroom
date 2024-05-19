import React from "react";

const Episodes = () => {
    return (
        <div>
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="w-full flex justify-center items-center flex-col mb-7">
                    <p className='text-4xl  italic inline border-b-4 border-cyan-500 text-center'>Episodes</p>
                    <p  className="py-4 text-2xl">Writer's Room </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"></div>

                </div>
        </div>
    )
}

export default Episodes;