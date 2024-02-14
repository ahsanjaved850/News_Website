const nav = document.querySelector(".navigation");
const first = document.querySelector(".first-page");
const firstTop = first.offsetTop + 100;
const home = document.querySelector(".home");
const who = document.querySelector(".who");
const what = document.querySelector(".what");
const contact = document.querySelector(".contact");
const read = document.querySelector(".read-more");
const tab = document.querySelector(".who-tab");
function move() {
  if (window.scrollY >= firstTop) {
    nav.style.opacity = "0.9";
  } else if (window.scrollY < firstTop) {
    nav.style.opacity = "1";
  }
}

home.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

what.addEventListener("click", function () {
  window.scrollTo({
    top: 750,
    behavior: "smooth",
  });
});

who.addEventListener("click", function () {
  window.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
});

contact.addEventListener("click", function () {
  window.scrollTo({
    top: 1500,
    behavior: "smooth",
  });
});

read.addEventListener("click", function () {
  window.scrollTo({
    top: 750,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", move);
