import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navbar";
import Page from "./page"; // Import the page component

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <head>{/* Add your head elements here */}</head>
      <body className={inter.className}>
        {/* <Navbar /> */}
        <Page /> {/* Render the page component */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
