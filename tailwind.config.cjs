/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1025px',
        xl: '1280px',
        xl2: '1360px',
      },
      extend: {},
    },
    plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
    daisyui: {
      styled: true,
      themes: ['emerald', 'dark', 'forest', 'synthwave'],
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      darkTheme: 'dark',
    },
  };
  