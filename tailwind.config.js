module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            Nunito: ['Nunito Sans', 'sans-serif']
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}