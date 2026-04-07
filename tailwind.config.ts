import type { Config } from "tailwindcss";

export const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "var(--primary-500)",
        },
        bg: {
          500: "var(--background-500)",
        },
        textc: {
          500: "var(--text-500)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
};