/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
            'gradient': 'radial-gradient(circle at center, #A5C7E7 0%, #1D3B7B 80%, #0A0E3F 100%)',
      },
    },
  },
  plugins: [],
}
