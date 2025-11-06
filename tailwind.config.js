/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2f855a",
          dark: "#276749",
          light: "#38a169",
        },
        beige: {
          DEFAULT: "#f5f1eb",
          light: "#faf8f5",
          dark: "#e8e0d6",
        },
      },
    },
  },
  plugins: [],
};


