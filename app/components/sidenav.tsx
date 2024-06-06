// app/components/SideNav.tsx
"use client";
import React from "react";
import { FaPlus, FaMusic } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SideNav: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-fuchsia-200/50 text-white p-4 mt-6 rounded-md w-60">
      <nav className="nav-links flex-grow">
        <button
          className="flex items-center mb-4 cursor-pointer bg-lilac-light text-black p-2 rounded-md w-full"
          onClick={() => router.push("/createplaylist")}
        >
          <FaPlus className="icon mr-2" />
          <span>Create Playlist</span>
        </button>
        <button
          className="flex items-center mb-4 cursor-pointer bg-lilac-light text-black p-2 rounded-md w-full"
          onClick={() => router.push("/genres")}
        >
          <FaMusic className="icon mr-2" />
          <span>Genres</span>
        </button>
      </nav>
    </div>
  );
};

export default SideNav;
