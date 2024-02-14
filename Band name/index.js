const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];
const list = document.getElementById("bands");
let arr = [];
let temp = "";
let temp2 = "";
for (let i = 0; i < bands.length; i++) {
  arr[i] = bands[i].split(" ");
}
for (let j = 0; j < bands.length; j++) {
  if (arr[j][0] === "The" || arr[j][0] === "An" || arr[j][0] === "A") {
    temp = arr[j][0];
    arr[j][0] = arr[j][0 + 1];
    arr[j][0 + 1] = temp;
  }
}
for (let k = 0; k < bands.length; k++) {
  for (s = 0; s < bands.length - 1; s++) {
    if (arr[s][0][0] > arr[s + 1][0][0]) {
      temp2 = arr[s];
      arr[s] = arr[s + 1];
      arr[s + 1] = temp2;
    }
  }
}
for (let j = 0; j < bands.length; j++) {
  if (arr[j][1] === "The" || arr[j][1] === "An" || arr[j][1] === "A") {
    temp = arr[j][1];
    arr[j][1] = arr[j][0];
    arr[j][0] = temp;
  }
}
for (let l = 0; l < bands.length; l++) {
  arr[l] = arr[l].join(" ");
}

const html = arr
  .map((items) => {
    return `<li>${items}</li>`;
  })
  .join(" ");
list.innerHTML = html;
console.log(html);
