const bar = document.querySelector(".bar");
const buttons = bar.querySelectorAll(".buttoned");
const choose = document.querySelector(".choose");
const dial = document.querySelector(".dial");
const remain = document.querySelector(".remain");
var d;
var hours;
var minutes;
var sec;
var intervalId;

function time() {
  d = new Date();
  hours = d.getHours();
  minutes = d.getMinutes();
  sec = d.getSeconds();
}
function display(inpHour, afMin, remSec) {
  let minutesLeft = Math.floor(remSec / 60);
  let secondsLeft = remSec % 60;
  secondsLeft = Math.max(0, secondsLeft);

  dial.innerHTML = `${minutesLeft < 10 ? "0" : ""}${minutesLeft}:${
    secondsLeft < 10 ? "0" : ""
  }${secondsLeft}`;
  remain.innerHTML = `be back at ${inpHour}:${afMin}`;
}

choose.addEventListener("change", function (event) {
  clearInterval(intervalId);
  time();
  let min = Number(event.target.value);
  let secLeft = min * 60;
  let fnHours = hours;
  let newMin = minutes + min;
  if (newMin > 59) {
    fnHours += Math.floor(newMin / 60);
    newMin %= 60;
  }
  intervalId = setInterval(function () {
    secLeft -= 1;
    if (secLeft <= 0) {
      clearInterval(intervalId);
    }
    display(fnHours, newMin, secLeft);
  }, 1000);
});

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    clearInterval(intervalId);
    time();
    let givenMin;
    if (e.target.textContent === "1 MIN") {
      givenMin = 1;
    } else if (e.target.textContent === "WORK 5") {
      givenMin = 5;
    } else if (e.target.textContent === "QUICK 15") {
      givenMin = 15;
    } else if (e.target.textContent === "SNACK 20") {
      givenMin = 20;
    } else if (e.target.textContent === "LUNCH BREAK") {
      givenMin = 59;
    }
    let givenSec = givenMin * 60;
    let givenHours = hours;
    let maxMin = givenMin + minutes;
    if (maxMin > 59) {
      givenHours += Math.floor(maxMin / 60);
      maxMin %= 60;
    }
    intervalId = setInterval(function () {
      givenSec -= 1;
      if (givenSec <= 0) {
        clearInterval(intervalId);
      }
      display(givenHours, maxMin, givenSec);
    }, 1000);
  });
}
