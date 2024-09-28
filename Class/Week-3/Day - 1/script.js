let ctr = 1;

function addTodo() {
  const inputEl = document.querySelector("input");
  const value = inputEl.value;

  const newDivEl = document.createElement("div");
  newDivEl.setAttribute("id", "todo-" + ctr);
  // can also w=be written as :
  //   newDivEl.innerHTML = `<div>${value}</div><button>Delete</button>`;
  newDivEl.innerHTML =
    "<div>" +
    value +
    "</div><button onclick='delTodo(" +
    ctr +
    ")'>Delete</button>";
  document.querySelector("body").appendChild(newDivEl);
  ctr = ctr + 1;
}

function delTodo(index) {
  const element = document.getElementById("todo-" + index);
  element.parentNode.removeChild(element);
}
