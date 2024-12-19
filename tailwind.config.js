module.exports = {
  purge: ['./**/*.html', './**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'profile-height': '30rem', // Add your custom height value here
      },
      width: {
        'profile-width': '25rem', // Add your custom height value here
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}