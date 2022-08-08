const button = document.querySelector(".burger"),
      menu = document.querySelector(".nav__list"),
      header = document.querySelector(".header");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  header.classList.toggle("menu-opened");
});