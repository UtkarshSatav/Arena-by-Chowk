/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB800",
        "primary-light": "#FFC933",
        accent: "#00F0FF",
        "bg-dark": "#070707",
        "surface-dark": "#111111",
        "surface-mid": "#161616",
        obsidian: "#070707",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        shimmer: "shimmer 4s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundSize: {
        "200%": "200% auto",
      },
    },
  },
  plugins: [],
};
