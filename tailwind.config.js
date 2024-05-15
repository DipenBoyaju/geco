/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e4a101",
        title: "#1c1121",
        textLight: "#6c6c6c",
        textDark: "#cbcbcb",
        text2: "#24182d",
        footerTitle: "#c8c8c8",
        footerText: "#90949c",
        cardbg: "1c181e",
        cardbd: "#211e23",
      },
      fontFamily: {
        'Oxanium': ['Oxanium', 'cursive'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      }
    },
  },
  plugins: [],
}

