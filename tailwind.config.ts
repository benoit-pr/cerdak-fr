import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cerulean: {
          50:  "#eef6fb",
          100: "#d4eaf5",
          200: "#a9d5eb",
          300: "#6eb8da",
          400: "#3a9bc4",
          500: "#1f7eaa",
          600: "#17638c",
          700: "#154f72",
          800: "#14405e",
          900: "#13364f",
          950: "#0b2234",
        },
        sand: {
          50:  "#faf8f4",
          100: "#f3ede3",
          200: "#e5d8c4",
          300: "#d2bc9c",
          400: "#bc9a72",
          500: "#a98057",
          600: "#8e6748",
          700: "#72513b",
          800: "#5e4334",
          900: "#4f392e",
        },
        slate: {
          950: "#0a0f14",
        }
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
