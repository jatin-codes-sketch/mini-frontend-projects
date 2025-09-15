let addBtn = document.querySelector(".add-btn");
let input = document.querySelector(".to-do");
let list = document.querySelector(".todo-view-area");

let allBtn = document.querySelector("#all-icon");
let activeBtn = document.querySelector("#active-icon");
let doneBtn = document.querySelector("#complete-icon");

let countText = document.querySelector(".todo-footer span");
let clearBtn = document.querySelector(".todo-footer a");

let tabs = document.querySelectorAll(".todo-navbar li");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// save tasks
function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// show one task
function showTask(item, i) {
  let box = document.createElement("div");
  box.className = "activity";

  let check = document.createElement("input");
  check.type = "checkbox";
  check.checked = item.done;

  let text = document.createElement("span");
  text.textContent = item.text;

  if (item.done) {
    text.style.textDecoration = "line-through";
    text.style.color = "#888";
  }

  check.addEventListener("change", () => {
    tasks[i].done = check.checked;
    save();
    showAll(getActiveTab());
  });

  box.appendChild(check);
  box.appendChild(text);
  list.appendChild(box);
}

// show all tasks
function showAll(type = "all") {
  list.innerHTML = "";
  tasks.forEach((item, i) => {
    if (type === "active" && item.done) return;
    if (type === "done" && !item.done) return;
    showTask(item, i);
  });
  updateCount();
}

// update left items
function updateCount() {
  let left = 0;

  // go through each task
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].done === false) {
      left++;
    }
  }

  // write the message
  if (left === 1) {
    countText.textContent = left + " item left";
  } else {
    countText.textContent = left + " items left";
  }
}


// add new task
addBtn.addEventListener("click", () => {
  let val = input.value.trim();
  if (val === "") return;

  tasks.push({ text: val, done: false });
  save();
  showAll("all");

  tabs.forEach(t => t.classList.remove("active"));
  allBtn.classList.add("active");

  input.value = "";
});

// tab click
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    if (tab.id === "all-icon") showAll("all");
    if (tab.id === "active-icon") showAll("active");
    if (tab.id === "complete-icon") showAll("done");
  });
});

// clear done tasks
clearBtn.addEventListener("click", () => {
  tasks = tasks.filter(t => !t.done);
  save();
  showAll(getActiveTab());
});

// helper: which tab is on
function getActiveTab() {
  let active = document.querySelector(".todo-navbar li.active");
  if (!active) return "all";
  if (active.id === "all-icon") return "all";
  if (active.id === "active-icon") return "active";
  if (active.id === "complete-icon") return "done";
}

// start
allBtn.classList.add("active");
showAll("all");
