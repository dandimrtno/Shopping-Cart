/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: '4px 4px 15px rgba(0, 0, 0, 0.2), -4px -4px 15px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

