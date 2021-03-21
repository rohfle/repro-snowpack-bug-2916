module.exports = {
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '18': '4.5rem',
        '68': '17rem'
      },
      minWidth: {
        '48': '12rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
  ],
}
