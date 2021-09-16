const togglerMenu = document.getElementsByClassName("toggler-menu")[0];
const toggleMenuLinks = document.querySelectorAll(".toggler-menu>ul>li>a");
let toggler = document.getElementsByClassName("burger")[0];
toggler.addEventListener("click", () => {
  togglerMenu.classList.toggle("show");
});
toggleMenuLinks.forEach((button) => {
  button.addEventListener("click", () => {
    togglerMenu.classList.toggle("show", false);
  });
});
