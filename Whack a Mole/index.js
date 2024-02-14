const mole = document.querySelectorAll(".mole");
const hole = document.querySelectorAll(".hole");
const score = document.querySelector(".score");
const button = document.querySelector(".buttoned");
let start = false;
let n = 0;
let intervalID;
let short;

function movement() {
  if (start) {
    let ran = Math.floor(Math.random() * 6) + 1;

    short = setTimeout(function () {
      document.querySelector(`.block${ran}`).classList.add("up");

      setTimeout(function () {
        document.querySelector(`.block${ran}`).classList.remove("up");
      }, 1000);
    }, 10);
  }
}
for (let i = 0; i < mole.length; i++) {
  mole[i].addEventListener("click", () => {
    movement();
    n++;
    score.innerHTML = n;
  });
}

button.addEventListener("click", () => {
  start = true;
  button.disabled = true;
  button.style.opacity = "0";
  clearInterval(intervalID);
  intervalID = setInterval(movement, 2000);
});
