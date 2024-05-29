// app/components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  showSearchBar: boolean;
}

const Header = ({ showSearchBar }: HeaderProps) => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?page=1&query=${encodeURIComponent(searchInput)}`);
    }
  };

  return (
    <header className="w-full h-16 flex justify-between bg-black bg-opacity-95 p-3 text-white items-center">
      {showSearchBar && (
        <form onSubmit={handleSearchSubmit} className="w-1/3">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="bg-gray-800 text-white rounded p-2 w-full"
          />
        </form>
      )}
      <div className="auth flex gap-5 px-10">
        <Link href="/signup">
          <div className="font-bold opacity-60 hover:opacity-100 cursor-pointer">
            Sign up
          </div>
        </Link>
        <Link href="/login">
          <div className="font-bold text-black hover:opacity-100 bg-white px-5 py-3 rounded-full cursor-pointer">
            Log in
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
