/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // If you are using a src directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'theme-red': '#E31E24',
        'theme-dark': '#1a1a1a',
        'theme-red-header': '#E81C2E',
        brand: {
          red: '#e41d25',
          dark: '#1a1a1a',
          gray: '#666666',
          light: '#f9f9f9',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
        subheader: ['"Barlow Semi Condensed"', 'sans-serif'],
        display: ['Barlow', 'sans-serif'],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        'carbon-fiber': "url('https://aqualine.like-themes.com/wp-content/uploads/2020/02/carbon_BG-20.png')",
        'world-map': "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png')"
      }
    },
  },
  plugins: [],
}
