/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mdMax: { max: "767px" },
        lgMax: { max: "1023px" },
        'xl': '1200px',
        container: { max: "1320px" },
        minContainer: { min: "1321px" },
        minOuterContainer: { min: "1728px" },
      },
      boxShadow: {
        faqBtnShadow:
          "box-shadow: 0px 0px 90px 0px rgba(0, 0, 0, 0.05) inset, 0px 0px 55px 0px rgba(42, 45, 61, 0.08)",
      },
    },
    backgroundImage: {
      faqBtn:
        "linear-gradient(221deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.00) 100%)",
      startBtn: "linear-gradient(to right, #FE490C 0%, #ffffff 70%)",
      redWhiteLine:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.5) 24%, #FE490C 96.2%);",
    },
    colors: {
      hist_red: "#FE490C",
      hist_black: "#161616",
      hist_overlay: "#151515c2",
      hist_white: {
        100: "#ffffff1a" /* 0.10 */,
        200: "#ffffff33" /* 0.20 */,
        500: "#ffffff80" /* 0.5 */,
        600: "#ffffff99" /* 0.6 */,
        800: "#ffffffcc",
        900: "#ffffff",
      },
    },
  },
  plugins: [],
};
// written here for quick look
// screens: {
//   'sm': '640px',
//   // => @media (min-width: 640px) { ... }

//   'md': '768px',
//   // => @media (min-width: 768px) { ... }

//   'lg': '1024px',
//   // => @media (min-width: 1024px) { ... }

//   'xl': '1280px',
//   // => @media (min-width: 1280px) { ... }

//   '2xl': '1536px',
//   // => @media (min-width: 1536px) { ... }
// }
