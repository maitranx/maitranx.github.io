// const colors = require('tailwindcss/colors');

module.exports = {
    important: true,
    content: ['./src/**/*.vue', './src/**/*.js', './src/**/*.jsx', './src/**/*.html', './src/**/*.md'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            jost: ['Jost'],
            poppins: ['Poppins'],
            inter: ['Inter'],
        },
        extend: {
            colors: {
                'primary-light': '#F7F8FC',
                'secondary-light': '#FFFFFF',
                'ternary-light': '#f6f7f8',
                'primary-dark': '#0A0A0A',
                'secondary-dark': '#102D44',
                'ternary-dark': '#171717',
                brand: '#A5F3FC',
            },
            container: {
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '5rem',
                    xl: '6rem',
                    '2xl': '8rem',
                },
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
