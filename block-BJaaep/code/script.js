let boxes1 = document.querySelectorAll(".boxes1>.box");
boxes1.forEach((box) => {
  box.addEventListener("click", function () {
    let text = Array.from(boxes1).indexOf(box) + 1;
    box.innerText = text;
    setTimeout(() => {
      box.innerText = "";
    }, 5000);
  });
});

let boxes2 = document.querySelector(".boxes2");
let boxes2list = document.querySelectorAll(".boxes2>.box");

function handleEvent(event) {
  if (event.target.classList[0] === "box") {
    let number = Array.from(boxes2list).indexOf(event.target) + 1;
    event.target.innerText = number;

    setTimeout(() => {
      event.target.innerText = "";
    }, 5000);
  }
}
boxes2.addEventListener("click", handleEvent);
