"use client";
import React from "react";
import Link from "next/link";

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="flex justify-between items-center w-full py-4 px-8">
        <h1 className="text-3xl">SpotiSky</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/signup">
                <a className="hover:text-gray-300">Sign Up</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a className="hover:text-gray-300">Log In</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-5xl font-bold mb-8">Music for everyone</h2>
        <p className="text-xl mb-16">
          Millions of songs. No credit card needed.
        </p>
        <div className="flex space-x-4">
          <Link href="/signup">
            <a className="button bg-green-500 hover:bg-green-600">
              Sign Up for Free
            </a>
          </Link>
          <Link href="/login">
            <a className="button bg-gray-800 hover:bg-gray-700">Log In</a>
          </Link>
        </div>
      </main>
      <footer className="text-center py-8">
        <p>&copy; 2024 SpotiSky</p>
      </footer>
    </div>
  );
};

export default Homepage;
