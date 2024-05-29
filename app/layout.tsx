// app/layout.tsx
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css"; // Import global styles
// import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode; // Define the type of the children prop
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>{/* Add your head elements here */}</head>
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
