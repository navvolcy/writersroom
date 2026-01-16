import React from "react";
import profile from "../assets/Navi.JPG";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="w-full max-w-md p-6 border rounded-lg shadow-md
                   animate-[fadeIn_0.5s_ease-out]"
      >
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            className="rounded-full w-40 h-40 object-cover"
            src={profile}
            alt="Profile"
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold italic">About</h1>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg italic text-center">
          Hello and welcome to the online page of my podcast, where you can listen
          and enjoy a collection of the Writer's Room's best interviews and
          conversations. Be sure to tune in to my live podcast on Monday,
          Wednesday, and Friday at 4pm PST. See you there!
        </p>
      </div>
    </div>
  );
};

export default About;
