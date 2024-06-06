// app/components/Layout.tsx
"use client";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar";
import SideNav from "./sidenav";
import ThemeToggle from "./themeToggle";
import { useSearchParams } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchParams = useSearchParams();

  const searchParamsObject = searchParams
    ? Object.fromEntries(searchParams.entries())
    : {};

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header showSearchBar={showSearchBar} searchParams={searchParamsObject} />
      <div className="flex">
        <div className="flex flex-col">
          <Sidebar onSearchClick={handleSearchClick} />
          <SideNav />
        </div>
        <main className="flex-grow p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
