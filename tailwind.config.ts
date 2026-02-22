import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 10px 30px -15px rgba(37, 99, 235, 0.25)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #0d4458 0%, #0f4f67 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
