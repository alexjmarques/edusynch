module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mm: '100px',
      sm: '480px',
      sm2: '600px',
      md: '768px',
      lg: '976px',
      xl: '1140px',
      xll: '1165px',
    },
    colors: {
      primary: '#7A57FD',
      primaryVar: '#744FF4',
      secundary: '#200E64',
      tertiary: '#343434',
      quaternary: '#CFC9E9',
      cyan: '#E5E5E5',
      white: '#FFFFFF',
      yellow: '#FFD74F',
      yellowMid: '#FFEAA4',
      black: '#000000',
      
    },
    fill: theme => theme('colors'),
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      openSans: ['"Open Sans"', 'sans-serif'],
    },
    fontSize: {
      'mini': '10px',
      'mini1': '11px',
      'base': '14px',
      'regular': '16px',
      'regular-x': '18px',
      'mblarge': '32px',
      'blarge': '34px',
      'large': '48px',
      'm-base': '21px',
      'm-large': '28px',
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
