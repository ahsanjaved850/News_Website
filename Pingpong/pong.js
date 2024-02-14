document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("tble");
  const tableX = 75;
  const tableY = 28;
  let n = 0;
  const ballMovement = 90;
  const playerScore = document.getElementById("score");

  let ball = [{ x: 30, y: 20 }];
  let ballX = 0;
  let ballY = 0;
  let bat = [
    { x: 30, y: 26 },
    { x: 31, y: 26 },
    { x: 32, y: 26 },
    { x: 33, y: 26 },
    { x: 34, y: 26 },
    { x: 35, y: 26 },
  ];
  let score = 0;
  let start = null;
  let initialSpeed = ballMovement;

  function creation() {
    table.innerHTML = "";
    const ballElement = document.createElement("div");
    ballElement.style.gridRowStart = ball[0].y;
    ballElement.style.gridColumnStart = ball[0].x;
    ballElement.classList.add("ball");
    table.appendChild(ballElement);

    for (let i = 0; i < bat.length; i++) {
      const batElement = document.createElement("div");
      batElement.style.gridRowStart = bat[i].y;
      batElement.style.gridColumnStart = bat[i].x;
      batElement.classList.add("bat");
      table.appendChild(batElement);
    }
  }

  function working() {
    const ballface = { x: ball[0].x + ballX, y: ball[0].y + ballY };

    ball.unshift(ballface);
    for (let i = 0; i < bat.length; i++) {
      if (ballface.x === bat[i].x && ballface.y === bat[i].y - 1) {
        ballY = -1;
        score++;
        playerScore.textContent = score;
        n++;
        if (n === 4 || n === 8 || n === 12 || n === 16 || n === 20) {
          if (bat.length > 3) {
            bat.shift(bat[0]);
          }
          initialSpeed -= 10;
          clearInterval(start);
          start = setInterval(working, initialSpeed);
        }
      } else {
        continue;
      }
    }
    if (ballface.x === tableX) {
      ballX = -1;
    } else if (ballface.x === tableX - 75) {
      ballX = 1;
    } else if (ballface.y === tableY - 27) {
      ballY = 1;
    } else if (ballface.x === 0) {
      ballX = 1;
    } else if (ballface.y === 0) {
      ballY = 1;
    } else if (ballface.y === 29) {
      n = 0;
      alert("Player:" + " " + score);
      reset();
      creation();
    } else {
      ball.pop();
    }
    creation();
  }

  function reset() {
    ball = [{ x: 30, y: 20 }];
    n = 0;
    ballX = 0;
    ballY = 0;
    bat = [
      { x: 30, y: 26 },
      { x: 31, y: 26 },
      { x: 32, y: 26 },
      { x: 33, y: 26 },
      { x: 34, y: 26 },
      { x: 35, y: 26 },
    ];
    score = 0;
    document.getElementById("start").disabled = false;
    document.getElementById("score").innerHTML = 0;
    initialSpeed = 90;
    clearInterval(start);
    start = setInterval(working, initialSpeed);
  }

  document.getElementById("reset").addEventListener("click", function () {
    reset();
    creation();
    clearInterval(start);
    document.getElementById("start").disabled = false;
  });
  document.getElementById("start").addEventListener("click", function () {
    ballX = 1;
    ballY = -1;
    document.getElementById("start").disabled = true;
  });
  document.addEventListener("keydown", (press) => {
    if (press.key === "ArrowLeft") {
      if (bat[0].x !== 0) {
        for (let i = 0; i < bat.length; i++) {
          bat[i].x--;
        }
      }
    } else if (press.key === "ArrowRight") {
      if (bat[bat.length - 1].x !== tableX) {
        for (let i = 0; i < bat.length; i++) {
          bat[i].x++;
        }
      }
    }
  });
  start = setInterval(working, initialSpeed);
});
