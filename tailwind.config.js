/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "var(--primary-light-color)",
          main: "var(--primary-main-color)",
        },
        text: {
          light: "var(--text-light-color)",
          main: "var(--text-main-color)",
        },
        background: {
          light: "var(--background-light-color)",
          main: "var(--background-main-color)",
        },
        outline: "var(--outline-color)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require('tailwind-scrollbar')({ nocompatible: true })],
};
