// MOBILE MENU
const btnHamburger = document.getElementById("btn-hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const btnNavbarClose = document.getElementById("navbar-close");
const navItems = document.querySelectorAll("#mobile-menu a"); // Select all nav items

btnNavbarClose.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

btnHamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when a nav item is clicked
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.add("hidden"); // Ensure the menu closes
  });
});

///////////// FAQ
new FAQ(document.querySelector(".faq")).init();
