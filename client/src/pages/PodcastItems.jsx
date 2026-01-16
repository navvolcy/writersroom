import React from "react";
import logo from "../images/NewWR.jpg";

const PodcastItems = ({ episode, date, details }) => {
  return (
    <div
      className="p-4 border rounded-lg shadow-sm border-neutral-300
                 animate-[fadeIn_0.4s_ease-out]"
    >
      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          className="rounded-full w-32 h-32 object-cover"
          src={logo}
          alt="Podcast Avatar"
        />
      </div>

      {/* Episode */}
      <div className="text-center mb-2">
        <h3 className="text-lg font-semibold italic">
          Episode: {episode}
        </h3>
      </div>

      {/* Date */}
      <div className="text-center mb-2">
        <h3 className="text-lg font-semibold italic">
          Date: {date}
        </h3>
      </div>

      {/* Details */}
      <div className="text-center">
        <h3 className="text-lg font-semibold italic">
          Details: {details}
        </h3>
      </div>
    </div>
  );
};

export default PodcastItems;
