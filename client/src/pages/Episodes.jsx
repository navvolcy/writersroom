import React, { useState } from "react";
import PodcastItems from "./PodcastItems";
import logo from '../assets/NewWR.jpg'

const Episodes = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const [room, setRoom] = useState({
    Episode: "1",
    Date: formattedDate,
    Details: "hello",
  });

  const [loading, setLoading] = useState(false);

  const handleEpisodes = (event) => {
    const numOnly = event.target.value.replace(/[^0-9]/g, "");

    setRoom((prev) => ({
      ...prev,
      Episode: numOnly,
    }));
  };

  const fetchEpisode = async () => {
    setLoading(true);

    setTimeout(() => {
      console.log("Searching episode:", room.Episode);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Card */}
      <div className="w-full max-w-md p-6 border rounded-lg shadow-md
                      animate-[fadeIn_0.5s_ease-out]">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Podcast Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Episodes</h1>
          <p className="text-gray-500">Writer&apos;s Room</p>
        </div>

        {/* Input */}
        <input
          className="w-full mb-6 px-4 py-2 border rounded text-center
                     focus:outline-none focus:ring focus:ring-gray-300"
          type="text"
          inputMode="numeric"
          maxLength={2}
          value={room.Episode}
          onChange={handleEpisodes}
        />

        {/* Episode Card */}
        <div className="mb-6">
          <PodcastItems
            episode={room.Episode}
            date={room.Date}
            details={room.Details}
          />
        </div>

        {/* Button */}
        <button
          onClick={fetchEpisode}
          className="w-full py-2 border rounded font-semibold
                     hover:bg-gray-100 transition duration-200"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </div>
  );
};

export default Episodes;
