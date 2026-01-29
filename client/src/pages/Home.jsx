import React from "react";
import logo from "../images/NewWR.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="w-full max-w-md p-6 border rounded-lg shadow-md
                   animate-[fadeIn_0.5s_ease-out]  bg-white"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            className="rounded-full w-40 h-40 object-cover"
            src={logo}
            alt="Main Page Logo"
          />
        </div>

        {/* Text */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">
            Welcome to Writer&apos;s Room
          </h1>
          <p className="text-gray-1000">
            Explore episodes, ideas, and stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
