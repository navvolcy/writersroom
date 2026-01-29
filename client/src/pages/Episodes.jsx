import React, { useState, useEffect } from "react";
import PodcastItems from "../components/PodcastItems";
import logo from "../images/NewWR.jpg";

const Episodes = () => {

  useEffect(() => {
  const API_URL = process.env.REACT_APP_API_URL;
  const testConnection = async () => {
    try {
      const res = await fetch(`${API_URL}/api/health`)

      const data = await res.json();
      console.log("Backend says:", data);
    } catch (err) {
      console.error("Backend connection failed:", err);
    }
  };

  testConnection();
}, []);

  const episodesData = [
    { id: 1, episode: "1", date: "2024-01-10", details: "Pilot episode" },
    { id: 2, episode: "2", date: "2024-01-17", details: "Writing process" },
    { id: 3, episode: "3", date: "2024-01-24", details: "Industry talk" },
    { id: 4, episode: "10", date: "2024-02-01", details: "Special guest" },
  ];

  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    const numOnly = e.target.value.replace(/[^0-9]/g, "");
    setInputValue(numOnly);
  };

  const handleSearch = () => {
    setSearchValue(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const filteredEpisodes = searchValue
    ? episodesData.filter((ep) =>
        ep.episode.includes(searchValue)
      )
    : episodesData;

  return (
    <div className="min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="Podcast Logo"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h1 className="text-4xl font-bold">Episodes</h1>
          <p className="text-gray-500">Writer&apos;s Room</p>
        </div>

        {/* Search */}
        <div className="flex gap-3 max-w-sm mx-auto mb-10">
          <input
            className="flex-1 px-4 py-2 border rounded text-center
                       focus:outline-none focus:ring focus:ring-gray-300"
            type="text"
            placeholder="Episode #"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />

          <button
            onClick={handleSearch}
            className="px-4 py-2 border rounded font-semibold
                       hover:bg-gray-100 transition"
          >
            Search
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredEpisodes.length ? (
            filteredEpisodes.map((ep) => (
              <PodcastItems
                key={ep.id}
                episode={ep.episode}
                date={ep.date}
                details={ep.details}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 italic">
              No episodes found
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Episodes;
