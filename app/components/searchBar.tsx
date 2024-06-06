// app/components/SearchBar.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?query=${searchInput.trim()}`);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="w-1/3">
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="bg-gray-200 text-black rounded p-2 w-full"
      />
    </form>
  );
};

export default SearchBar;