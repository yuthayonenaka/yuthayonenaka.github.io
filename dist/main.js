const hamburgerMenu = document.getElementById("hamburger-menu");
const navMenu = document.querySelectorAll("nav ul a");
const navBar = document.getElementById("navBar");
const activePage = window.location.pathname;

hamburgerMenu.addEventListener("click", () => {
  navBar.classList.contains("hidden")
    ? navBar.classList.remove("hidden")
    : navBar.classList.add("hidden");
});

navMenu.forEach((menu) => {
  menu.addEventListener("click", () => {
    navBar.classList.add("hidden");
  });
});
