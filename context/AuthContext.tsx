// // context/AuthContext.tsx
// import React, { createContext, useState, useContext, useEffect } from "react";
// import { exchangeCodeForToken } from "@/app/lib/spotifyAuth";

// interface AuthContextType {
//   accessToken: string | null;
//   setAccessToken: (token: string) => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [accessToken, setAccessToken] = useState<string | null>(null);

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get("code");

//     if (code) {
//       exchangeCodeForToken(code).then((data) => {
//         setAccessToken(data.accessToken); // Correct property name
//       }).catch(err => console.error("Error exchanging code for token:", err));
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ accessToken, setAccessToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
