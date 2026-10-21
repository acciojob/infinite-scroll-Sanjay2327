let list = document.getElementById("infi-list");
let main = document.querySelector("main");

function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.innerText = "Item";
    list.appendChild(li);
  }
}

// default: clear whatever is there, then add 10 items with JS
list.innerHTML = "";
addItems(10);

function scroll() {
  // only when the user reaches the end of the list
  if (main.scrollTop + main.clientHeight >= main.scrollHeight - 5) {
    addItems(2);
  }
}