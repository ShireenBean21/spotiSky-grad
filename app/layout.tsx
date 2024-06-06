// app/layout.tsx
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import ThemeToggle from "./components/themeToggle";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
          <ThemeToggle />

          {}
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}

// const inter = Inter({ subsets: ["latin"] });

// interface RootLayoutProps {
//   children: ReactNode;
// }

// const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
//   return (
//     <html lang="en">
//       <head>{/* Add your head elements here */}</head>
//       <body className={`${inter.className} transition-colors duration-300`}>
//         <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
//           <ThemeToggle />
//           {children}
//         </div>
//       </body>
//     </html>
//   );
// };

// export default RootLayout;
