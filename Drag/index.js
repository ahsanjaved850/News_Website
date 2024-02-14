const container = document.querySelector(".container");
let isMouseDown = false;
let start;
let move;

container.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  move = container.scrollLeft;
  start = e.pageX - container.offsetLeft;
});

container.addEventListener("mouseup", () => {
  isMouseDown = false;
});

container.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  const xaxis = e.pageX - container.offsetLeft;
  const walk = (xaxis - start) * 3;
  container.scrollLeft = move - walk;
});
