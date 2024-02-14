document.addEventListener("DOMContentLoaded", function () {
  let returnId;
  document.addEventListener("click", function () {
    let selected = event.target;
    if (selected) {
      let clickId = selected.closest(".key");
      returnId = clickId.id;
    }
    let file = document.getElementById(`sg${returnId}`);
    if (file) {
      file.play();
    }
  });
});
