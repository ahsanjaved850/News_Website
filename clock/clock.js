document.addEventListener("DOMContentLoaded", function () {
  function running() {
    let time = new Date();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let hour = time.getHours();

    document.querySelector(".hour-hand").style.transform = `rotate(${
      (hour / 12) * 360 + 90
    }deg)`;
    document.querySelector(".min-hand").style.transform = `rotate(${
      (min / 60) * 360 + 90
    }deg)`;
    document.querySelector(".sec-hand").style.transform = `rotate(${
      (sec / 60) * 360 + 90
    }deg)`;
  }
  setInterval(running);
});
