const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector(".navbar");
const nav2 = document.querySelector(".navbar .acc-chart");

menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 576) {
    nav.classList.toggle("slide");
  } else if (window.innerWidth > 576) {
    nav2.classList.toggle("slide");
  }
});
