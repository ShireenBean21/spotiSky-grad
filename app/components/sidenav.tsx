"use client";
import React, { useState } from "react";
import { FaHome, FaSearch, FaPlus, FaMusic } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SideNav: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="sidenav grid grid-cols-1 gap-y-8 bg-gray-900 text-white p-4 min-h-screen">
      <div>
        <div className="logo mb-8">
          <h1>Logo</h1>
        </div>
        <div className="search mb-8">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-3 rounded bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded ml-2"
            >
              <FaSearch />
            </button>
          </form>
        </div>
        <nav className="nav-links">
          <div className="link flex items-center mb-4 cursor-pointer">
            <FaHome className="icon mr-2" />
            <span>Home</span>
          </div>
          <div className="link flex items-center mb-4 cursor-pointer">
            <FaPlus className="icon mr-2" />
            <span>Create Playlist</span>
          </div>
          <div
            className="link flex items-center mb-4 cursor-pointer"
            onClick={() => router.push("/genres")}
          >
            <FaMusic className="icon mr-2" />
            <span>Genres</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
