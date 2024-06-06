// app/components/Header.tsx
"use client";
import React from "react";
import Link from "next/link";
import SearchBar from "./searchBar";

interface HeaderProps {
  showSearchBar: boolean;
}

const Header = ({ showSearchBar }: HeaderProps) => {
  return (
    <header className="w-full h-16 flex justify-between bg-turquoise text-white p-3 items-center">
      {showSearchBar && <SearchBar />}
      <div className="flex-1"></div>
      <div className="auth flex gap-5">
        <Link href="/signup" className="font-bold opacity-60 hover:opacity-100">
          Sign up
        </Link>
        <Link
          href="/login"
          className="font-bold text-black bg-white px-5 py-3 rounded-full hover:opacity-100"
        >
          Log in
        </Link>
      </div>
    </header>
  );
};

export default Header;
