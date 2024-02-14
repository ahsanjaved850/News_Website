const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADASS";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50;

let drawing = false;
let x = 0;
let y = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!drawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [x, y] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

document.addEventListener("mousedown", (e) => {
  drawing = true;
  [x, y] = [e.offsetX, e.offsetY];
});

document.addEventListener("mousemove", draw);
document.addEventListener("mouseup", function () {
  drawing = false;
});
document.addEventListener("mouseout", function () {
  drawing = false;
});
