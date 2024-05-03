"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  useEffect(() => {
    const fetchFeaturedPlaylists = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/browse/featured-playlists",
          {
            headers: {
              Authorization: `Bearer ${"BQAXirKga6d0yxjZwgTGnltPRlnRY-Nf9-340er8v8HOCSv2t1xA7frNSJbBuqfvL3Dm0mvvSDPUSuCA5fYM7yH6T7SOB4YqAVNLOT3-kaPa2ZuJx6g"}`,
            },
          }
        );
        setFeaturedPlaylists(response.data.playlists.items);
      } catch (error) {
        console.error("Error fetching featured playlists:", error);
      }
    };

    fetchFeaturedPlaylists();
  }, []);

  return (
    <div>
      <h1>Welcome to SpotiSky!</h1>
      <h2>Featured Playlists</h2>
      <ul>
        {featuredPlaylists.map((playlist) => (
          <li key={playlist.id}>
            <img src={playlist.images[0].url} alt={playlist.name} />
            <p>{playlist.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
