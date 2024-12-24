module.exports = {
  purge: ['./**/*.html', './**/*.js'], // Ensure your custom classes are not purged
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'profile-height': '30rem', // Custom height value
      },
      width: {
        'profile-width': '25rem', // Custom width value
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}