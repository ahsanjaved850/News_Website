const msg = new SpeechSynthesisUtterance();
let voices = [];
const dropList = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
msg.text = document.querySelector('[name="text"]').value;

function makeVoices() {
  voices = speechSynthesis.getVoices();
  dropList.innerHTML = voices
    .map((voice) => {
      return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
    })
    .join("");
}
function selectVoice() {
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === this.value) {
      msg.voice = voices[i];
    }
  }
  toggle();
}
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}
function setOptions() {
  msg[this.name] = this.value;
  toggle();
}
speechSynthesis.addEventListener("voiceschanged", makeVoices);
dropList.addEventListener("change", selectVoice);
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("change", setOptions);
}
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", function () {
  toggle(false);
});
// stopButton.addEventListener("click", toggle.bind(null, false));
// stopButton.addEventListener("click", () => toggle(false));
