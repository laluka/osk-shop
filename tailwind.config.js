/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#78174d',
                'primary-hover': '#9d1f64',
                bg: '#0f172a',
                'bg-light': '#1e293b',
                text: '#f8fafc',
                'text-muted': '#94a3b8',
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
