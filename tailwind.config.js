/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#3626A7',
      secondary: '#657ED4',
      body: '#0D0106',
      warning: '#FF331F',
      background: '#FBFBFF',
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss/colors')
  ],
}

