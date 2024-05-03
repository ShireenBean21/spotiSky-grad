"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Homepage: React.FC = () => {
  const [featuredArtists, setFeaturedArtists] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  useEffect(() => {
    // Fetch featured artists
    axios
      .get("https://api.spotify.com/v1/browse/featured-playlists", {
        headers: {
          Authorization: `Bearer ${"BQAXirKga6d0yxjZwgTGnltPRlnRY-Nf9-340er8v8HOCSv2t1xA7frNSJbBuqfvL3Dm0mvvSDPUSuCA5fYM7yH6T7SOB4YqAVNLOT3-kaPa2ZuJx6g"}`,
        },
      })
      .then((response) => {
        setFeaturedPlaylists(response.data.playlists.items);
      })
      .catch((error) => {
        console.error("Error fetching featured playlists:", error);
      });

    // Fetch featured playlists
    axios
      .get("https://api.spotify.com/v1/browse/featured-artists", {
        headers: {
          Authorization: `Bearer ${"BQAXirKga6d0yxjZwgTGnltPRlnRY-Nf9-340er8v8HOCSv2t1xA7frNSJbBuqfvL3Dm0mvvSDPUSuCA5fYM7yH6T7SOB4YqAVNLOT3-kaPa2ZuJx6g"}`,
        },
      })
      .then((response) => {
        setFeaturedArtists(response.data.artists.items);
      })
      .catch((error) => {
        console.error("Error fetching featured artists:", error);
      });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="py-4 px-8 flex justify-between items-center">
        <h1 className="text-3xl">SpotiSky</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/signup">
                <a className="hover:text-gray-300">Sign Up</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a className="hover:text-gray-300">Log In</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="px-8 py-16">
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Featured Artists</h2>
          <div className="flex space-x-4">
            {featuredArtists.map((artist) => (
              <div key={artist.id} className="text-center">
                <p>{artist.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl mb-6">Featured Playlists</h2>
          <div className="grid grid-cols-3 gap-4">
            {featuredPlaylists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-gray-800 p-4 rounded-lg text-center"
              >
                <p>{playlist.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="text-center py-8">
        <p>&copy; 2024 SpotiSky</p>
      </footer>
    </div>
  );
};

export default Homepage;
