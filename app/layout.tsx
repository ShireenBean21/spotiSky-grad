import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navbar";
import React from "react";
import Page from "./page"; // Import the page component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpotiSky",
  description: "Iceberg grad project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <Page /> {/* Render the page component */}
        {children}
      </body>
    </html>
  );
}
