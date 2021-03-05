module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Roboto': 'Roboto, sans-serif',
      },
      margin: {
        '1/8': '14.5%',
      },
      colors: {
        cp : '#7854F7',
        cnb : '#272D4E',
        cg : '#94A2B3',
        cb : '#299EF3',
        cgn : '#70C217',
        cnp : '#5F37EF',
      },
      inset: {
        '1/6': '15%',
      },
    },
  },
  variants: {
    extend: {
      width: ['hover'],
      display: ['hover'],
    },
  },
  plugins: [],
}
