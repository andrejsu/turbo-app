module.exports = {
    content: [
        './app/helpers/**/*.rb',
        './app/javascript/**/*.js',
        './app/views/**/*.html.erb'
    ],
    theme: {
    },
    plugins: [
        require("daisyui"),
    ],
    daisyui: {
        themes: true,
    },
}