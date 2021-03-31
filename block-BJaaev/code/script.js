let allTasks = [
  {
    name: "watch movie",
    isChecked: false,
  },
  {
    name: "play game",
    isChecked: true,
  },
];

let input = document.querySelector("#text");
let taskDiv = document.querySelector(".task-div");

let handleClick = (event) => {
  if (event.keyCode === 13 && event.target.value !== "") {
    let newtask = {};
    newtask.isChecked = false;
    newtask.name = event.target.value;
    allTasks.push(newtask);
    listAllTasks();
    input.value = "";
  }
};

let defaultUI = (ele, index, arr) => {
  let task = document.createElement("div");
  task.classList.add("task");

  let check = document.createElement("input");
  check.type = "checkbox";
  check.name = "check";
  check.id = "check";
  check.checked = ele.isChecked;
  check.addEventListener("change", () => {
    checkEvent(arr, index);
  });

  let span = document.createElement("span");
  span.innerText = ele.name;
  span.classList.add("task-name");
  if (check.checked === true) {
    span.style.color = "gray";
    span.style.opacity = "0.5";
    span.style.textDecoration = "line-through";
  }

  let small = document.createElement("a");
  small.href = "#";
  small.innerText = "X";

  small.addEventListener("click", () => {
    crossEvent(index);
  });

  task.append(check, span, small);
  taskDiv.append(task);
};

let crossEvent = (i) => {
  allTasks.splice(i, 1);
  createUI();
};
let checkEvent = (arr, i) => {
  arr[i].isChecked = !arr[i].isChecked;
  createUI();
};

let createUI = () => {
  taskDiv.innerHTML = "";

  allTasks.forEach((ele, index, arr) => {
    defaultUI(ele, index, arr);
  });
  let footerSpan = document.querySelector(".footer-span");
  footerSpan.innerText = `${allTasks.length} tasks left`;
};

let createActiveUI = () => {
  taskDiv.innerHTML = "";
  let activeTasks = allTasks.filter((e) => {
    return e.isChecked === false;
  });

  activeTasks.forEach((ele, index, arr) => {
    defaultUI(ele, index, arr);
  });
  let footerSpan = document.querySelector(".footer-span");
  footerSpan.innerText = `${activeTasks.length} tasks left`;
};

let createCompletedUI = () => {
  taskDiv.innerHTML = "";
  let completedTasks = allTasks.filter((e) => {
    return e.isChecked === true;
  });

  completedTasks.forEach((ele, index, arr) => {
    defaultUI(ele, index, arr);
  });
  let footerSpan = document.querySelector(".footer-span");
  footerSpan.innerText = `${completedTasks.length} tasks left`;
};

let createRemovedAllUI = () => {
  taskDiv.innerHTML = "";
  allTasks = allTasks.filter((e, index, arr) => {
    return e.isChecked === false;
  });

  allTasks.forEach((ele, index, arr) => {
    defaultUI(ele, index, arr);
  });
  let footerSpan = document.querySelector(".footer-span");
  footerSpan.innerText = `${allTasks.length} tasks left`;
};

let footall = document.querySelector(".footer-all");
let footactive = document.querySelector(".footer-active");
let footcompleted = document.querySelector(".footer-completed");

let listAllTasks = () => {
  createUI();
  footall.style.backgroundColor = "gray";
  footactive.style.backgroundColor = "white";
  footcompleted.style.backgroundColor = "white";
};

let listActiveTasks = () => {
  createActiveUI();
  footall.style.backgroundColor = "white";
  footactive.style.backgroundColor = "gray";
  footcompleted.style.backgroundColor = "white";
};

let listCompletedTasks = () => {
  createCompletedUI();
  footall.style.backgroundColor = "white";
  footactive.style.backgroundColor = "white";
  footcompleted.style.backgroundColor = "gray";
};

footall.addEventListener("click", listAllTasks);
footactive.addEventListener("click", listActiveTasks);
footcompleted.addEventListener("click", listCompletedTasks);

input.addEventListener("keyup", handleClick);
listAllTasks();

let clearAll = document.querySelector(".footer-clear");
clearAll.addEventListener("click", (event) => {
  createRemovedAllUI();
  footall.style.backgroundColor = "gray";
  footactive.style.backgroundColor = "white";
  footcompleted.style.backgroundColor = "white";
});
