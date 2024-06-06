"use client";
import Link from "next/link";
import { FiHome, FiSearch } from "react-icons/fi";

interface SidebarProps {
  onSearchClick: () => void;
}

const Sidebar = ({ onSearchClick }: SidebarProps) => {
  return (
    <div className="w-60 bg-fuchsia-200/50 rounded-md text-gray flex flex-col items-center py-4 space-y-6">
      <Link href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <FiHome className="text-2xl" />
          <span>Home</span>
        </div>
      </Link>
      <div
        onClick={onSearchClick}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <FiSearch className="text-2xl" />
        <span>Search</span>
      </div>
    </div>
  );
};

export default Sidebar;
