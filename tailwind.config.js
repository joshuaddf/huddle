
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
        //Primary

        "Pink": "hsl(322, 100%, 66%)",
        "Light-Pink": "hsl(321, 100%, 78%)",
        "Light-Red": "hsl(0, 100%, 63%)",

        //Neutral

        "Very-Dark-Cyan": "hsl(192, 100%, 9%)",
        "Very-Pale-Blue": "hsl(207, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
