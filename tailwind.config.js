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
        yellow: {
          50: '#fffde7',      // groc molt clar
          100: '#fff9c4',    // groc pàl·lid
          300: '#ffe066',    // groc suau
          500: '#ffd600',    // groc intens (inspirat en la independència)
          600: '#ffb300',    // groc elegant, una mica més fosc
        },
      },
    },
  },
  plugins: [],
} 