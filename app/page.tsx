"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import SideNav from "./components/sidenav";
import Link from "next/link";

// Define types for the data
interface Artist {
  id: string;
  images: { url: string }[];
  name: string;
}

interface Playlist {
  id: string;
  images: { url: string }[];
  name: string;
}

const Homepage = () => {
  const [featuredArtists, setFeaturedArtists] = useState<Artist[]>([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/browse/featured-playlists",
          {
            headers: {
              Authorization: `Bearer ${"BQDv_da-_MD9rr5paaNK_1h2T4LzO2WocbSp6VW54zGJ5gwCa1WQNtHtzmS_ydEag-i8rKS1is09hFjjzroXs9tx0aGrftlUb7ALJv9KqXw3fLehXkY"}`,
            },
          }
        );
        console.log("Featured Playlists:", response.data.playlists.items); // Debug log
        setFeaturedPlaylists(response.data.playlists.items);
      } catch (error) {
        console.error("Error fetching featured playlists:", error);
      }
    };

    const fetchArtists = async () => {
      try {
        const response = await axios.get("https://api.spotify.com/v1/artists", {
          headers: {
            Authorization: `Bearer ${"BQDv_da-_MD9rr5paaNK_1h2T4LzO2WocbSp6VW54zGJ5gwCa1WQNtHtzmS_ydEag-i8rKS1is09hFjjzroXs9tx0aGrftlUb7ALJv9KqXw3fLehXkY"}`,
          },
        });
        console.log("Featured Artists:", response.data.artists); // Debug log
        setFeaturedArtists(response.data.artists);
      } catch (error) {
        console.error("Error fetching featured artists:", error);
      }
    };

    fetchPlaylists();
    fetchArtists();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 min-h-screen bg-violet-600 text-white">
      <div className="col-span-2 bg-violet-800 p-4">
        <SideNav />
      </div>
      <div className="col-span-10 p-4">
        <h1 className="text-3xl font-bold mb-4">New Release Albums</h1>
        <div className="grid grid-cols-4 gap-9">
          {featuredArtists.slice(0, 6).map((artist) => (
            <Link
              href={`https://open.spotify.com/artist/${artist.id}`}
              key={artist.id}
            >
              <div className="flex flex-col items-center cursor-pointer">
                <Image
                  src={artist.images[0]?.url || "/placeholder.jpg"}
                  alt={artist.name}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                <p className="mt-2 text-center">{artist.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <h1 className="text-3xl font-bold mt-8 mb-4">Featured Playlists</h1>
        <div className="grid grid-cols-4 gap-9">
          {featuredPlaylists.slice(0, 6).map((playlist) => (
            <Link
              href={`https://open.spotify.com/playlist/${playlist.id}`}
              key={playlist.id}
            >
              <div className="flex flex-col items-center cursor-pointer">
                <Image
                  src={playlist.images[0]?.url || "/placeholder.jpg"}
                  alt={playlist.name}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                <p className="mt-2 text-center">{playlist.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
