/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/shared/components/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontSize: {
        dynamic: 'var(--font-size-dynamic)',
      },
      colors: {
        white: '#FFFFFF',
        'neutral-10': '#F7F7F7',
        'neutral-15': '#F5F5F5',
        'neutral-25': '#9D9D9D',
        'neutral-100': '#000000',
        yellow: '#FED138',
        'neutral-75': '#979797',
      },
      fontFamily: {
        abel: ['Abel-Regular'],
      },
      screens: {
        xs: '320px',
        sm: '375px',
        md: '414px',
        lg: '768px',
        xl: '1024px',
      },
    },
  },
  plugins: [],
}
