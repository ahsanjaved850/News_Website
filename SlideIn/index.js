window.addEventListener("scroll", function () {
  let right = document.querySelectorAll(".align-right");
  let left = document.querySelectorAll(".align-left");
  let position = window.scrollY;

  if (position >= 100) {
    left.forEach((pic) => {
      pic.style.transform = "translateX(0%)";
    });
    right.forEach((pic) => {
      pic.style.transform = "translateX(0%)";
    });
  }
});
