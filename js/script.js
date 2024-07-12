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

// question 1
const faqBtn1 = document.getElementById("faqBtn1");
const faq_1 = document.getElementById("faq-1");
const plus1 = document.getElementById("plus1");
const minus1 = document.getElementById("minus1");

faqBtn1.addEventListener("click", () => {
  faq_1.classList.toggle("hidden");
  plus1.classList.toggle("hidden");
  minus1.classList.toggle("hidden");
});
// question 2
const faqBtn2 = document.getElementById("faqBtn2");
const faq_2 = document.getElementById("faq-2");
const plus2 = document.getElementById("plus2");
const minus2 = document.getElementById("minus2");

faqBtn2.addEventListener("click", () => {
  faq_2.classList.toggle("hidden");
  plus2.classList.toggle("hidden");
  minus2.classList.toggle("hidden");
});
// question 3
const faqBtn3 = document.getElementById("faqBtn3");
const faq_3 = document.getElementById("faq-3");
const plus3 = document.getElementById("plus3");
const minus3 = document.getElementById("minus3");

faqBtn3.addEventListener("click", () => {
  faq_3.classList.toggle("hidden");
  plus3.classList.toggle("hidden");
  minus3.classList.toggle("hidden");
});
