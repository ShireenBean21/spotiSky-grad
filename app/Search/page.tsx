// app/search/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Layout from "../components/Layout";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    const searchAll = async () => {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/search?q=${encodeURIComponent(
            query
          )}&type=track,artist,album,playlist`,
          {
            headers: {
              Authorization: `Bearer ${"BQBOmW02XEAUaIRoxr-RU_BsdAX8yvY0TUioE_KB2iY991K-uKWhIGLmgstdK7Hyv7ZXVg8T-4z8GB4IKYgWIfE-LZdvSED77saBRl7tAJ6qbROLWYY"}`,
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
    <Layout>
      <div className="p-4 min-h-screen bg-rose-50/50 text-sla-200">
        <h1 className="text-3xl font-bold mb-4">Search Results</h1>
        <div className="grid grid-cols-4 gap-9">
          {searchResults.map((item) => {
            // Determine the image URL based on item type
            let imageUrl = "/placeholder.jpg";
            if (item.images && item.images.length > 0) {
              imageUrl = item.images[0].url;
            } else if (item.album && item.album.images.length > 0) {
              imageUrl = item.album.images[0].url;
            }

            return (
              <a
                key={item.id}
                href={`https://open.spotify.com/${item.type}/${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center cursor-pointer"
              >
                <Image
                  src={imageUrl}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                <p className="mt-2 text-center">{item.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
