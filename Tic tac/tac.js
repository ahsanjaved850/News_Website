document.addEventListener("DOMContentLoaded", function () {
  let grid = document.getElementById("cross");
  let resultArr = [];
  let blockId;
  let resultId;
  let arr = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"];
  let n = 0;
  let max = 9;

  grid.addEventListener("click", function (event) {
    let selected = event.target;
    if (selected) {
      let blockElement = selected.closest(".block");
      blockId = blockElement.id;
      resultId = blockElement.querySelector(".result").id;
    }
  });

  document.querySelector(".button1").addEventListener("click", function () {
    n = 0;
  });
  document.querySelector(".button2").addEventListener("click", function () {
    n = 1;
  });
  document.getElementById("button1").onclick = function () {
    this.disabled = true;
    document.getElementById("button2").disabled = true;
  };
  document.getElementById("button2").onclick = function () {
    this.disabled = true;
    document.getElementById("button1").disabled = true;
  };

  document.getElementById("reset").onclick = function () {
    reset();
  };

  function clicking() {
    document.addEventListener("click", function () {
      if (n < max) {
        if (
          document.querySelector(`#${resultId}`).innerHTML !== "X" &&
          document.querySelector(`#${resultId}`).innerHTML !== "O"
        ) {
          document.querySelector(`#${resultId}`).innerHTML = arr[n];
          resultArr.push(arr[n] + Number(blockId[5]));
          n++;
        }
      }
      result();
    });
  }
  function result() {
    let valX = [];
    let valO = [];
    let matchX = 0;
    let matchO = 0;
    const winner = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    for (let s = 0; s < resultArr.length; s++) {
      if (resultArr[s][0] === "X") {
        valX.push(Number(resultArr[s][1]));
      } else if (resultArr[s][0] === "O") {
        valO.push(Number(resultArr[s][1]));
      }
    }

    if (resultArr.length >= 5) {
      for (let i = 0; i < winner.length; i++) {
        matchX = 0;
        matchO = 0;
        for (let j = 0; j < 3; j++) {
          if (valX.includes(winner[i][j])) {
            matchX++;
          }
          if (valO.includes(winner[i][j])) {
            matchO++;
          }
        }
        if (matchX === 3) {
          alert("X WINS!");
          reset();
          return;
        } else if (matchO === 3) {
          alert("O WINS!");
          reset();
          return;
        }
      }
      if (n === 9) {
        reset();
        return;
      }
    }
  }

  function reset() {
    resultArr = [];
    blockId = [];
    resultId = [];
    n = 0;
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    const results = document.querySelectorAll(".result");
    for (let i = 0; i < results.length; i++) {
      results[i].innerHTML = "";
    }
  }
  clicking();
});
