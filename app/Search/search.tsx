// app/search/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    const searchAll = async () => {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/search?q=${query}&type=track,artist,album,playlist`,
          {
            headers: {
              Authorization: `Bearer ${process.env.SPOTIFY_OAUTH_TOKEN}`,
            },
          }
        );
        const { tracks, artists, albums, playlists } = response.data;
        const results = [
          ...(tracks?.items || []),
          ...(artists?.items || []),
          ...(albums?.items || []),
          ...(playlists?.items || []),
        ];
        setSearchResults(results);
      } catch (error) {
        console.error("Error searching:", error);
      }
    };

    searchAll();
  }, [query]);

  return (
    <div className="p-4 min-h-screen bg-violet-600 text-white">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <div className="grid grid-cols-4 gap-9">
        {searchResults.map((item) => (
          <a
            key={item.id}
            href={`https://open.spotify.com/${item.type}/${item.id}`}
            className="flex flex-col items-center cursor-pointer"
          >
            <Image
              src={item.images?.[0]?.url || "/placeholder.jpg"}
              alt={item.name}
              width={150}
              height={150}
              className="rounded-lg"
            />
            <p className="mt-2 text-center">{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
