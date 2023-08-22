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
        primaryWhite: "#F5F7FF",
        darkerBlue: "#0156FF",
        lighterBlue: "#01A4FF",
        darkerGray: "#666666",
        primaryGray: "#A2A6B0",
        lighterGray: "#CACDD8",
        primaryBrick: "#C94D3F",
        primaryGreen: "#78A962",
      },
      boxShadow: {
        primaryShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.14)",
        softShadow: "0 4px 200px 0 rgba(0, 0, 0, 0.18)",
        hardShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.17)",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
