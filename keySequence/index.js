let arr = [];
const secret = "ahsa";
window.addEventListener("keydown", (e) => {
  arr.push(e.key);
  console.log(arr);
  if (arr.join("").includes(secret)) {
    console.log("DING DING");
    cornify_add();
  }
});
