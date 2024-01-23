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
        back: "#dfdfdf",
      },
      fontSize: {
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "26px",
      },
      boxShadow: {
        card: "0px 1px 6px #d7d6d6",
      },
    },
  },
  plugins: [],
};
