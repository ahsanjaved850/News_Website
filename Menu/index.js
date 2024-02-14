const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function food() {
  display();
  addItems.addEventListener("change", function () {
    event.preventDefault();
    const name = this.item.value;
    if (name !== "") {
      items.push(name);
      localStorage.setItem("items", JSON.stringify(items));
      display();
    }
  });
  function display() {
    const html = items
      .map((item) => {
        return `<li>
        <input type="checkbox" class="box" />
        <p>${item}</p>
    </li>
    `;
      })
      .join("");
    itemsList.innerHTML = html;
  }
}
food();
