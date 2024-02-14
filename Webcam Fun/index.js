const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error("OH NO", err);
    });
}

function paintCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // taking the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them using the helper function
    // pixels = redEffect(pixels);
    // pixels = splitRGB(pixels);

    pixels = greenScreen(pixels);
    // ctx.globalAlpha = 0.1;

    //putting them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="handsome Man">`;
  strip.insertBefore(link, strip.firstChild);
}
function redEffect(pixel) {
  for (let i = 0; i < pixel.data.length; i += 4) {
    pixel.data[i] = pixel.data[i] + 100; //red
    pixel.data[i + 1] = pixel.data[i + 1] - 60; // blue
    pixel.data[i + 2] = pixel.data[i + 2] * 0.5; // green
  }
  return pixel;
}
function splitRGB(pixel) {
  for (let i = 0; i < pixel.data.length; i += 4) {
    pixel.data[i - 200] = pixel.data[i]; //red
    pixel.data[i - 500] = pixel.data[i + 1]; // blue
    pixel.data[i - 550] = pixel.data[i + 2]; // green
  }
  return pixel;
}
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }
  return pixels;
}
video.addEventListener("canplay", paintCanvas);
getVideo();
