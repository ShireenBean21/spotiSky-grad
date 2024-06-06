// app/components/createPlaylist.tsx
"use client";
import { useState, useEffect } from "react";

const CreatePlaylist = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("spotify_access_token");
    if (token) {
      setAccessToken(token);
    } else {
      alert("You need to log in first!");
      window.location.href = "/login"; // Redirect to login page if not logged in
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!accessToken) {
      alert("You need to log in first!");
      return;
    }

    try {
      const userResponse = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const userData = await userResponse.json();
      const userId = userData.id;

      const response = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            description: description,
            public: isPublic,
          }),
        }
      );

      if (response.ok) {
        const playlist = await response.json();
        alert(`Playlist created! ID: ${playlist.id}`);
      } else {
        alert("Failed to create playlist");
      }
    } catch (error) {
      console.error("Error creating playlist:", error);
      alert("Failed to create playlist");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4">
      <label className="mb-2">
        Playlist Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="ml-2 p-1 border rounded"
          required
        />
      </label>
      <label className="mb-2">
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="ml-2 p-1 border rounded"
        />
      </label>
      <label className="mb-2">
        Public:
        <input
          type="checkbox"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
          className="ml-2"
        />
      </label>
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded mt-4"
      >
        Create Playlist
      </button>
    </form>
  );
};

export default CreatePlaylist;
