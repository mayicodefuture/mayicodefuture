const {
  colors: { teal, orange, pink, ...colors },
} = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./**/*.html', './**/*.tsx', './**/*.ts'],
  theme: {
    colors: {
      ...colors,
      js: '#F0DB4F',
      js2: '#323330',
      ts: '#007acc',
      linkedin: '#0E76A8',
      facebook: '#3B5998',
      red: '#e74c3c',
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '1/2': '50%',
    },
    extend: {},
  },
}
