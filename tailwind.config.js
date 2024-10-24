/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        "dr-bg" : "#1C3434",
        "tx-green" : "#2CF85A",
        "ofw-drk" : "#EEEADF",
        "ofw-lt" : "#F5F0EA",
        "gry-lt" : "#C7C7C5"

      },
    },
  },
  plugins: [],
}

