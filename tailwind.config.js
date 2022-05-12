module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            boxShadow: {
                material:
                    '0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 18px #0000001f',
            },
            colors: {
                primary: {
                    DEFAULT: '#3f51b5',
                },
            },
        },
    },
    plugins: [],
}
