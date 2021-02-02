module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      minHeight: {
        'content':'90vh',
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
        backgroundColor: theme => ({
            ...theme('colors'),
            navbar: '#f86604',
            body: '#f6f6ef'
        }),
        extend: {}
    },
    variants: {
        extend: {
          margin: ['last'],
        }
    },
    plugins: []
};
