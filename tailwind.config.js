/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          red: '#e41d25',
          dark: '#1a1a1a',
          gray: '#666666',
          light: '#f9f9f9',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Barlow', 'sans-serif'],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
}
