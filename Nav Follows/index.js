const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");
const arrow = document.querySelector(".arrow");
function drop() {
  this.classList.add("trigger-enter");
  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");
      background.classList.add("open");
      background.classList.add("arrow");
    }
  }, 150);
}
function up() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
  background.classList.remove("arrow");
}
for (let i = 0; i < triggers.length; i++) {
  triggers[i].addEventListener("mouseenter", drop);
}
for (let j = 0; j < triggers.length; j++) {
  triggers[j].addEventListener("mouseleave", up);
}
