/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('../public/news-monkey.png')",
      },
      
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bouncing: {
          "0%, 100%": { transform: "translateY(-3%)" },
          "50%": { transform: "none" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      //imgage hover property
      backgroundSize: {
        'size-200': '200% 200%',
    },
    backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
    },
    },
  },
  plugins: [require("daisyui")],
};
