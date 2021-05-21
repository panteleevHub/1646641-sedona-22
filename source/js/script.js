const body = document.querySelector(".page-body");
const navToggle = document.querySelector(".main-nav__toggle");
const navList = document.querySelector(".main-nav__list");

body.classList.remove("no-js");

navToggle.addEventListener("click", function () {
  if (navToggle.classList.contains("main-nav__toggle--closed")) {
    navList.classList.add("main-nav__list--opened");
    navToggle.classList.remove("main-nav__toggle--closed");
    navToggle.classList.add("main-nav__toggle--opened");
  }
  else {
    navList.classList.remove("main-nav__list--opened");
    navToggle.classList.add("main-nav__toggle--closed");
  }
});
