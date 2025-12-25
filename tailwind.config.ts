import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        subtext: "var(--subtext)",
        text: "var(--text)",
      },
      fontFamily: {
        custom: ["var(--font-custom)", "sans-serif"],
        "orange-squash": ["var(--font-orange-squash)", "sans-serif"],
        paragraph: ["var(--font-paragraph)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

