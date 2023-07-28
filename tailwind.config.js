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
      },
    },
    fontSize: {
      hist_title: "32px",
      hist_title_lg: "76px",
      hist_description: "16px",
      hist_description_lg: "20px",
    },
    colors: {
      hist_red: "#FE490C",
      hist_black: "#161616",
      hist_white: {
        100: "#ffffff1a",
        500: "#ffffff80",
        800: "#ffffffcc",
        900: "#ffffff",
      },
    },
    maxWidth: {
      xs: "342px",
      sm: "30rem",
      md: "40rem",
      lg: "1013px",
      xl: "60rem",
      service: "890px",
      "2xl": "70rem",
      "3xl": "80rem",
      "4xl": "90rem",
      "5xl": "100rem",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
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
