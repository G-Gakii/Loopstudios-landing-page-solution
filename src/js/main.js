const navLinks = document.querySelector(".nav_navlinks");
const mediaQuery = window.matchMedia("(max-width:600px)");
const menu = document.querySelector(".menu");
const navBar = document.querySelector(".nav__brand_links");
const navList = document.querySelectorAll(".nav_list");
const brand = document.querySelector(".brand");

if (mediaQuery.matches) {
  navLinks.style.display = "none";

  menu.src = "./images/icon-hamburger.svg";

  menu.addEventListener("click", () => {
    brand.style.margin = "1rem";
    navLinks.style.display = "flex ";
    navLinks.style.flexDirection = "column";
    navLinks.alignItems = "start";
    navLinks.style.width = "100%";
    navLinks.style.backgroundColor = "black";
    navBar.style.width = "100%";
    navBar.style.backgroundColor = "black";
    navBar.style.minHeight = "100vh";
    menu.src = "images/icon-close.svg";
    menu.style.margin = "1rem";
    navList.forEach((item) => (item.style.margin = "1rem"));
  });

  // hero section
  const Hero = document.querySelector(".hero_container");
  const HeroContent = document.querySelector(".hero_content");
  const HeroImage = document.querySelector(".hero__image");
  Hero.style.position = "static";
  Hero.style.display = "flex";
  Hero.style.flexDirection = "column";
  Hero.style.marginBottom = "2rem";
  HeroContent.style.position = "static";
  HeroContent.style.width = "100%";
  HeroImage.style.width = "100%";
  HeroImage.style.margin = "1rem";

  // main
  const main = document.querySelector(".main_container");
  main.style.padding = "1rem";

  // creation for mobile
  const creation = document.querySelector(".creation__images");
  creation.style.gridTemplateColumns = "1fr";
  creation.style.gridTemplateRows = "repeat(8,1fr)";

  const earth = document.getElementById("deepEarth");
  earth.style.background = "url('./images/mobile/image-deep-earth.jpg')";
  const night = document.getElementById("night");
  night.style.background = "url('./images/mobile/image-night-arcade.jpg')";

  const soccer = document.getElementById("soccer");
  soccer.style.background = "url('./images/mobile/image-soccer-team.jpg')";
  const grid = document.getElementById("grid");
  grid.style.background = "url('./images/mobile/image-grid.jpg')";
  const up = document.getElementById("up");
  up.style.background = "url('./images/mobile/image-from-above.jpg')";
  const pocket = document.getElementById("pocket");
  pocket.style.background = "url('./images/mobile/image-pocket-borealis.jpg')";
  const curiosity = document.getElementById("curiosity");
  curiosity.style.background = "url('./images/mobile/image-curiosity.jpg')";
  const fisheye = document.getElementById("fisheye");
  fisheye.style.background = "url('./images/mobile/image-fisheye.jpg')";

  // footer
  footer = document.querySelector(".footer_container");
  footer.style.flexDirection = "column";
  footer.style.alignItems = "center";
  footerLinks = document.querySelector(".footer__links");
  footerLinks.style.flexDirection = "column";
}
