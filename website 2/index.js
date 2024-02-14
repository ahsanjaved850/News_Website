const home = document.querySelector(".home");
const about = document.querySelector(".about");

home.addEventListener("click", () => {
  home.classList.add("active");
  about.classList.remove("active");
});

about.addEventListener("click", () => {
  about.classList.add("active");
  home.classList.remove("active");
});
