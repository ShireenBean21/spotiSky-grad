"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const accessToken =
  "BQAPtG8VJCu70uXu0sIA4WZBeEmdxEnDEGHK0qBbhJNJYzY-OYOmOM5Q4UjeL2uQyHGrkk5xKznet0NX1kgz_PUdx3RQbFxafUGjSyBnJbEtDWkhDbY"; // Replace with your actual access token

const genreSeeds = ["hip-hop", "r-n-b", "pop", "jazz"];

const fetchTracksForGenre = async (genre: string) => {
  const response = await axios.get(
    `https://api.spotify.com/v1/recommendations?seed_genres=${genre}&limit=4`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data.tracks;
};

const GenresPage: React.FC = () => {
  const [hipHop, setHipHop] = useState<any[]>([]);
  const [randb, setRandB] = useState<any[]>([]);
  const [pop, setPop] = useState<any[]>([]);
  const [jazz, setJazz] = useState<any[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const [hipHopTracks, randbTracks, popTracks, jazzTracks] =
          await Promise.all([
            fetchTracksForGenre("hip-hop"),
            fetchTracksForGenre("r-n-b"),
            fetchTracksForGenre("pop"),
            fetchTracksForGenre("jazz"),
          ]);

        setHipHop(hipHopTracks);
        setRandB(randbTracks);
        setPop(popTracks);
        setJazz(jazzTracks);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const renderGenreSection = (title: string, genreList: any[]) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-4 gap-9">
        {genreList.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <Image
              src={item.album.images[0].url}
              alt={item.name}
              width={150}
              height={150}
              className="rounded-lg"
            />
            <p className="mt-2 text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4 min-h-screen bg-violet-600 text-white">
      <h1 className="text-3xl font-bold mb-4">Genres</h1>
      {renderGenreSection("Hip Hop", hipHop)}
      {renderGenreSection("R&B", randb)}
      {renderGenreSection("Pop", pop)}
      {renderGenreSection("Jazz", jazz)}
    </div>
  );
};

export default GenresPage;
