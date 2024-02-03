// Pobieranie elementow
const navigationBar = document.querySelector(".navigation-bar");
const navigationMobile = document.querySelector(".navigation");
const closeMobileMenu = document.querySelector(".close-btn");
const carouselItem = document.querySelectorAll(".carousel-item");

const changeActiveMenu = () => {
  navigationBar.classList.toggle("active");
  navigationMobile.classList.toggle("active");
};

const addActiveToCarouselItem = () => {
  if (window.innerWidth >= 1200) {
    carouselItem.forEach((item) => item.classList.add("active"));
  } else if (window.innerWidth < 1200) {
    carouselItem.forEach((item) => item.classList.remove("active"));
  }
};

addActiveToCarouselItem();

navigationBar.addEventListener("click", changeActiveMenu);
closeMobileMenu.addEventListener("click", changeActiveMenu);
