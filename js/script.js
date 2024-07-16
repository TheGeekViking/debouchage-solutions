// MOBILE MENU
const btnHamburger = document.getElementById("btn-hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const btnNavbarClose = document.getElementById("navbar-close");

btnNavbarClose.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

btnHamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

///////////// FAQ
new FAQ(document.querySelector(".faq")).init();

////////// Carousel
