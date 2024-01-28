// Pobieranie elementow
const navigationBar = document.querySelector(".navigation-bar");
const navigationMobile = document.querySelector(".navigation");
const closeMobileMenu = document.querySelector(".close-btn");

const changeActiveMenu = () => {
  navigationBar.classList.toggle("active");
  navigationMobile.classList.toggle("active");
};

navigationBar.addEventListener("click", changeActiveMenu);
closeMobileMenu.addEventListener("click", changeActiveMenu);
