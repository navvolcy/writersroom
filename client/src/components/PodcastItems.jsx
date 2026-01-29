import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import logo from "../images/NewWR.jpg";

const PodcastItems = ({
  episode,
  date,
  details,
  isFavorite,
  onToggleFavorite
}) => {
  return (
    <div className="relative p-4 border rounded-lg shadow-sm border-neutral-300  bg-white">
      
      {/* Favorite Icon */}
      <button
        onClick={onToggleFavorite}
        className="absolute top-3 right-3 text-xl text-orange-400"
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>

      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          className="rounded-full w-32 h-32 object-cover"
          src={logo}
          alt="Podcast Avatar"
        />
      </div>

      {/* Episode */}
      <h3 className="text-center text-lg font-semibold italic">
        Episode: {episode}
      </h3>

      <p className="text-center italic">Date: {date}</p>
      <p className="text-center italic">Details: {details}</p>
    </div>
  );
};

export default PodcastItems;
