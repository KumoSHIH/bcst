/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: '360px',
      sm: '600px',
      md: '768px',
    }
  },
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: [
        './**/*.html',
        './**/*.pug',
        './**/*.vue',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ],
}
