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
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                main: ['Kufam', 'sans-serif'],
            },
            fontSize: {
                16: '1rem',
                20: '1.25rem',
                20: '1.25rem',
                25: '1.5625rem',
                35: '2.1875rem',
                45: '2.8125rem',
                65: '4.0625rem',
                278: '17.375rem',
            },
            maxWidth: {
                container: '1399px',
                navigation: '771px',
            },
            margin: {
                60: '60px',
            },
            colors: {
                'dark-blue': '#0A0B3B',
                blue: '#3B3A5D',
                brown: '#B16642',
                yellow: '#FFBB50',
                'hover-grey': '#A4A4A4',
                grey: '#757575',
                'light-grey': '#8E8E8E',
            },
            fontFamily: {
                sourseSans3: ['"Source Sans 3"'],
            },
            backgroundImage: {
                video: "url('/img/home/video-img.png')",
            },
        },
    },
    plugins: [],
};
