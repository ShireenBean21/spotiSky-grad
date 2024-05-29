// // pages/_app.tsx
// import { AuthProvider } from "@/context/AuthContext";
// import type { AppProps } from "next/app";

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <AuthProvider>
//       <Component {...pageProps} />
//     </AuthProvider>
//   );
// }

// export default MyApp;

// app/pages/_app.tsx
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css"; // Import global styles if any

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
