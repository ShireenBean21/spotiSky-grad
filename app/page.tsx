// app/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

// Define types for the data
interface Album {
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
  const [rihannaAlbums, setRihannaAlbums] = useState<Album[]>([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/browse/featured-playlists",
          {
            headers: {
              Authorization: `Bearer ${"BQBOmW02XEAUaIRoxr-RU_BsdAX8yvY0TUioE_KB2iY991K-uKWhIGLmgstdK7Hyv7ZXVg8T-4z8GB4IKYgWIfE-LZdvSED77saBRl7tAJ6qbROLWYY"}`, // Replace with your actual access token
            },
          }
        );
        setFeaturedPlaylists(response?.data.playlists.items);
      } catch (error) {
        console.error("Error fetching featured playlists:", error);
      }
    };

    const fetchRihannaAlbums = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H/albums",
          {
            headers: {
              Authorization: `Bearer ${"BQBOmW02XEAUaIRoxr-RU_BsdAX8yvY0TUioE_KB2iY991K-uKWhIGLmgstdK7Hyv7ZXVg8T-4z8GB4IKYgWIfE-LZdvSED77saBRl7tAJ6qbROLWYY"}`, // Replace with your actual access token
            },
          }
        );
        setRihannaAlbums(response?.data.items);
      } catch (error) {
        console.error("Error fetching Rihanna's albums:", error);
      }
    };

    fetchPlaylists();
    fetchRihannaAlbums();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-violet-50 dark:bg-black text-black dark:text-white p-4">
        {/* Banner Image */}
        <div className="w-full h-64 relative mb-8">
          <Image
            src="/rhianna.jpeg"
            alt="Rihanna"
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
          />
        </div>

        <h1 className="text-3xl font-bold mb-4">Rihanna&#39;s Albums</h1>
        <div className="grid grid-cols-4 gap-9">
          {rihannaAlbums.slice(0, 8).map((album) => (
            <Link
              href={`https://open.spotify.com/album/${album.id}`}
              key={album.id}
            >
              <div className="flex flex-col items-center cursor-pointer">
                <Image
                  src={album.images[0]?.url || "/placeholder.jpg"}
                  alt={album.name}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                <p className="mt-2 text-center">{album.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <h1 className="text-3xl font-bold mt-8 mb-4">Featured Playlists</h1>
        <div className="grid grid-cols-4 gap-9">
          {featuredPlaylists.slice(0, 8).map((playlist) => (
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
    </Layout>
  );
};

export default Homepage;
