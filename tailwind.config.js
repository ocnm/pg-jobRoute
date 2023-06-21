/** @type {import('tailwindcss').Config} */
export const content = [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
    extend: {
        backgroundImage: {
            'gradient': 'radial-gradient(circle at center, #A5C7E7 0%, #1D3B7B 80%, #0A0E3F 100%)',
        },
        backgroundSize: {
            '125%': '125%',
        },
        textColor: {
            primary: '#000',
        },
    },
};
export const plugins = [];
