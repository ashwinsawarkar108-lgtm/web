import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ted: "#E62B1E",
      },
      boxShadow: {
        glow: "0 0 50px rgba(230,43,30,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
