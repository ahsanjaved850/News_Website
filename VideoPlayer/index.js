const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const maxi = player.querySelector(".maximize");

function toggleButton() {
  const tap = video.paused ? "play" : "pause";
  video[tap]();
}
function UpdateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}
function skip() {
  video.currentTime += Number(this.dataset.skip);
}
function rangeUpdate() {
  video[this.name] = this.value;
}
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
function fullScreen() {
  if (player.requestFullscreen) {
    player.requestFullscreen();
  }
}

video.addEventListener("click", toggleButton);
video.addEventListener("play", UpdateButton);
video.addEventListener("pause", UpdateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", toggleButton);
skipButtons.forEach((buttons) => buttons.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", rangeUpdate));
maxi.addEventListener("click", fullScreen);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", function () {
  if (mousedown) {
    scrub();
  }
});
progress.addEventListener("mousedown", function () {
  mousedown = true;
});
progress.addEventListener("mouseup", function () {
  mousedown = false;
});
