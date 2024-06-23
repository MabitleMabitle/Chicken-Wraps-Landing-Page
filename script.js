const menuIcon = document.querySelector(".menu-icon");
const chickenWrapsMenu = document.querySelector(".chicken-wraps-menu");

menuIcon.addEventListener("click", () => {
  chickenWrapsMenu.classList.toggle("interchange");
});
