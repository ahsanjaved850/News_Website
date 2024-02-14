const timeStamp = Array.from(document.querySelectorAll("[data-time]"));
const total = timeStamp.map((node) => node.dataset.time);
let sec = 0;
for (let i = 0; i < total.length; i++) {
  total[i] = total[i].split(":");
  total[i][0] = Number(total[i][0]);
  total[i][1] = Number(total[i][1]);
  sec = sec + (total[i][0] * 60 + total[i][1]);
}

const hours = Math.floor(sec / 3600);
sec = sec % 3600;
const mins = Math.floor(sec / 60);

sec = sec % 60;

console.log(hours, mins, sec);
