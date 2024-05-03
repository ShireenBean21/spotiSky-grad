// pages/homepage.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const Homepage = () => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  useEffect(() => {
    const fetchFeaturedPlaylists = async () => {
      try {
        const response = await axios.get("/api/spotify/featured-playlists");
        setFeaturedPlaylists(response.data.playlists);
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
