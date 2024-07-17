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
        sidebarBg: "#1B1834",
        navbarBg: "#E6E8F0",
        emailTextColor: "#696F8C",
        lightPink: "#F3CEDF",
        domainEven: "#F3F4F6",
        redColor: "#FF5D4D",
        titleBg: "#F9FAFB",
        successGreen: "#51B55F",
        pendingYellow: "#EAB308",
        detailBoder: "#E6E8F0",
        fadeWhite: "#5B6B79",
      },

      gridTemplateColumns: {
        layout: "16rem 1fr",
        dashboard: "1fr 15rem",
        funnel: "40px 1fr",
        templateGrid: "repeat(auto-fill,minmax(15rem,1fr))",
      },
    },
  },
  plugins: [],
};
