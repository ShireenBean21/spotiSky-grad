// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: "#40E0D0",
        lilac: {
          light: "#E0BBE4",
          dark: "#9D4EDD",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class", // Enable class-based dark mode
};

export default config;
