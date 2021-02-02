module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            navbar: '#f86604',
            body: '#f6f6ef'
        }),
        extend: {}
    },
    variants: {
        extend: {
            margin: ['last']
        }
    },
    plugins: []
};
