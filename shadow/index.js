const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const cursor = 300;

function movement(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  let x = e.offsetX;
  let y = e.offsetY;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const cursorX = Math.round((x / width) * cursor) - cursor / 2;
  const cursorY = Math.round((y / height) * cursor) - cursor / 2;

  text.style.textShadow = `${cursorX}px ${cursorY}px 0 rgba(255, 0, 0, 0.8),
  ${-cursorX}px ${cursorY}px 0 rgba(0, 255, 0, 0.8),
  ${cursorX}px ${-cursorY}px 0 rgba(0, 0, 255, 0.8)`;
}

hero.addEventListener("mousemove", movement);
