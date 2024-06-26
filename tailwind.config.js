/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ js,vue}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto, sans-serif']
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
