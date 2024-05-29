// app/components/Layout.tsx
"use client";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar";
import SideNav from "./sidenav";
import { useSearchParams } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchParams = useSearchParams();

  // Check if searchParams is defined before accessing its properties
  const searchParamsObject = searchParams
    ? Object.fromEntries(searchParams.entries())
    : {};

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <div className="flex">
      <Sidebar onSearchClick={handleSearchClick} />
      <SideNav />
      <div className="flex-grow ml-60">
        <Header
          showSearchBar={showSearchBar}
          searchParams={searchParamsObject}
          router={undefined}
        />
        <main className="p-4 pt-16">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
