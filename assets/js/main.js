const Navlink = document.querySelectorAll(".nav-link");

Navlink.forEach((link) => {
  link.addEventListener("click", () => {
    Navlink.forEach((link) => {
      link.classList.remove("actived");
    });
    link.classList.add("actived");
  });
});
