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

for (let link of toggleMenuLinks) {
  link.addEventListener("click", (elem) => {
    elem.preventDefault();
    const toSection = link.getAttribute("href");
    document.querySelector(toSection).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
