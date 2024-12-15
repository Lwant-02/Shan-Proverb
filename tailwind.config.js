/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        bShanbb: ["B-SHANBB"],
        kamJing: ["Kam-jing"],
        namTeng: ["NamTeng-2020"],
        pangLong: ["PangLong-Latest"],
        pyiBold: ["Pyidaungsu-Bold"],
        pyiNum: ["Pyidaungsu-Numbers"],
        yungHkio: ["Yunghkio-Unicode"],
        pRegular: ["Poppins-Regular"],
      },
    },
  },
  plugins: [],
};
