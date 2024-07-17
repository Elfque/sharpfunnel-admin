/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteBg: "#fafbff",
        blackText: "#27272A",
        inputBorder: "#C1C4D6",
        purpleColor: "#5B58EB",
        pinkColor: "#D81B60",
      },
    },
  },
  plugins: [],
};
