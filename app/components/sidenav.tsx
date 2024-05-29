// app/components/SideNav.tsx
"use client";
import React from "react";
import { FaHome, FaPlus, FaMusic } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SideNav: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-violet-800 text-white p-4 fixed top-60 left-0 h-[calc(100vh-60px)] w-60 z-10">
      <div className="nav-links">
        <div
          className="link flex items-center mb-4 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <FaHome className="icon mr-2" />
          <span>Home</span>
        </div>
        <div
          className="link flex items-center mb-4 cursor-pointer"
          onClick={() => router.push("/create-playlist")}
        >
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
      </div>
    </div>
  );
};

export default SideNav;
