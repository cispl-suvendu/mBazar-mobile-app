/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      accent: "#2D8B56",
      accentLight: "#43A86F",
      accentDark: "#1D7543",
      white: "#ffffff",
      black: "#181818",
      gray: "#F6F6F6",
      graydark: "#757575",
      shadow: "#F2F2F2",
      red: "#C81414",
    },
    fontFamily: {
      JostSemiBold: ["Jost_600SemiBold", "sans-serif"],
      JostMedium: ["Jost_500Medium", "sans-serif"],
      JostRegular: ["Jost_400Regular", "sans-serif"],
      JostLight: ["Jost_300Light", "sans-serif"],
      InterLight: ["Inter_300Light", "sans-serif"],
      InterRegular: ["Inter_400Regular", "sans-serif"],
      InterMedium: ["Inter_500Medium", "sans-serif"], 
      InterSemiBold: ["Inter_600SemiBold", "sans-serif"],
      icon:["MaterialSymbols_400Regular", "sans-serif"],
    },
    fontSize: {
      bigTitle: ["24", { lineHeight: "32px" }],
      paragraph: ["14", { lineHeight: "22px" }],
      listTitle: ["16", { lineHeight: "24px" }],
      smalTitle: ["12", { lineHeight: "20px" }],
      mediumTitle: ["18", { lineHeight: "26px" }],
      xsTitle: ["10", { lineHeight: "18px" }],
      xlTitle: ["20", { lineHeight: "28px" }],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
    },
    extend: {
      backgroundImage:{
        productBg: 'linear-gradient(180deg,rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 100%)',
      }
    },
  },
  plugins: [],
}