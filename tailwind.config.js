/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pine: { DEFAULT: "#14532D", deep: "#0B3B1F", lime: "#84CC16", mist: "#F7FBF4" },
      },
      fontFamily: { sans: ['"Space Grotesk"', "sans-serif"] },
    },
  },
  plugins: [],
};
