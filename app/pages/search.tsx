"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useSearchParams } from "next/navigation";

interface Artist {
  id: string;
  images: { url: string }[];
  name: string;
}

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState<Artist[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    const searchArtists = async () => {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/search?q=${query}&type=artist`,
          {
            headers: {
              Authorization: `Bearer ${"BQCmgM0NFm9r04dHWNaIVXrZYMWttWY1m2_QHlsYVs597NWrrvKdv0kjwt_I_EwqiMNBPmG_tRiCRGESUc99tVIXon988_qEvTDcMObjTdhRNAQ89K0"}`,
            },
          }
        );
        setSearchResults(response.data.artists.items);
      } catch (error) {
        console.error("Error searching artists:", error);
      }
    };

    searchArtists();
  }, [query]);

  return (
    <div className="p-4 min-h-screen bg-violet-600 text-white">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <div className="grid grid-cols-4 gap-9">
        {searchResults.map((artist) => (
          <a
            href={`https://open.spotify.com/artist/${artist.id}`}
            key={artist.id}
            className="flex flex-col items-center cursor-pointer"
          >
            <Image
              src={artist.images[0]?.url || "/placeholder.jpg"}
              alt={artist.name}
              width={150}
              height={150}
              className="rounded-lg"
            />
            <p className="mt-2 text-center">{artist.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
