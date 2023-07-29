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
        container: { max: "1320px" },
        minContainer: { min: "1321px" },
      },
      boxShadow: {
        faqBtnShadow:
          "box-shadow: 0px 0px 90px 0px rgba(0, 0, 0, 0.05) inset, 0px 0px 55px 0px rgba(42, 45, 61, 0.08)",
      },
    },
    backgroundImage: {
      faqBtn:
        "linear-gradient(221deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.00) 100%)",
    },
    colors: {
      hist_red: "#FE490C",
      hist_black: "#161616",
      hist_white: {
        100: "#ffffff1a" /* 0.10 */,
        200: "#ffffff33" /* 0.20 */,
        500: "#ffffff80" /* 0.5 */,
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
