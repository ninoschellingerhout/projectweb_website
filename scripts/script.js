// JavaScript Document

// Navigatie menu

var menuButton = document.querySelector("nav button");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}
