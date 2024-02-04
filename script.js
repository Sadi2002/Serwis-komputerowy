// Pobieranie elementow
const navigationBar = document.querySelector(".navigation-bar");
const navigationMobile = document.querySelector(".navigation");
const closeMobileMenu = document.querySelector(".close-btn");
const carouselItem = document.querySelectorAll(".carousel-item");
const scrollTopIcon = document.querySelector(".back-to-top");

const changeActiveMenu = () => {
  navigationBar.classList.toggle("active");
  navigationMobile.classList.toggle("active");
};

const addActiveToCarouselItem = () => {
  if (window.innerWidth >= 1200) {
    carouselItem.forEach((item) => item.classList.add("active"));
  }
};

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 750 && window.innerWidth < 1500) {
    scrollTopIcon.classList.add("show");
  } else if (window.pageYOffset > 50 && window.innerWidth > 1500) {
    scrollTopIcon.classList.add("show");
  } else {
    scrollTopIcon.classList.remove("show");
  }
});

addActiveToCarouselItem();

navigationBar.addEventListener("click", changeActiveMenu);
closeMobileMenu.addEventListener("click", changeActiveMenu);
