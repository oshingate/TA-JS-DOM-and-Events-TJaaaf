let firstBox = document.querySelector(".first");
let secondBox = document.querySelector(".second");

firstBox.addEventListener("click", function () {
  let randomNo = Math.floor(Math.random() * 16777215).toString(16);
  firstBox.style.backgroundColor = "#" + randomNo;
  console.log("clicked");
});

secondBox.addEventListener("mousemove", function () {
  let randomNo = Math.floor(Math.random() * 16777215).toString(16);
  secondBox.style.backgroundColor = "#" + randomNo;
  console.log("moved");
});
