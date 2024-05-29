// app/components/Sidebar.tsx
import Link from "next/link";
import { FiHome, FiSearch } from "react-icons/fi";
import Image from "next/image";

interface SidebarProps {
  onSearchClick: () => void;
}

const Sidebar = ({ onSearchClick }: SidebarProps) => {
  return (
    <div className="h-60 w-60 bg-black flex flex-col items-center p-4 fixed top-0 left-0 z-20">
      <div className="mb-6">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>
      <Link href="/">
        <div className="flex flex-col items-center space-y-2 cursor-pointer mb-4">
          <FiHome className="text-2xl text-white" />
          <span className="text-xs text-white">Home</span>
        </div>
      </Link>
      <div
        onClick={onSearchClick}
        className="flex flex-col items-center space-y-2 cursor-pointer"
      >
        <FiSearch className="text-2xl text-white" />
        <span className="text-xs text-white">Search</span>
      </div>
    </div>
  );
};

export default Sidebar;
