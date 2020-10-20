// JavaScript Document

// Navigatie menu

var menuButton = document.querySelector("nav button");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}

// Smooth scroll on page

const links = document.querySelectorAll("header ul.on-page-navigatie a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// source: https://webdesign.tutsplus.com/tutorials/smooth-scrolling-vanilla-javascript--cms-35165
