/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Lora: ["Lora"],
      },
      colors: {
        bgColor: "#f8f8f8",
        primary: {
          100: "#41a1e6",
        },
        grayColor: "#faf9f8",
        greenColor: "#ddf272",
      },
    },
  },
  plugins: [],
};
