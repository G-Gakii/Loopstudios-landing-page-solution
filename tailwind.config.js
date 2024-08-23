/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("../images/desktop/image-hero.jpg")',
        earth: 'url("../images/desktop/image-deep-earth.jpg")',

        arcade: 'url("../images/desktop/image-night-arcade.jpg")',
        soccer: 'url("../images/desktop/image-soccer-team.jpg")',
        grid: 'url("../images/desktop/image-grid.jpg")',
        above: 'url("../images/desktop/image-from-above.jpg")',
        borealis: 'url("../images/desktop/image-pocket-borealis.jpg")',
        curisity: 'url("../images/desktop/image-curiosity.jpg")',
        fisheye: 'url("../images/desktop/image-fisheye.jpg")',
      },
      fontFamily: {
        alata: ["Alata", "sans - serif"],
        josefin: ["Josefin Sans", "sans - serif"],
      },
    },
  },
  plugins: [],
};
