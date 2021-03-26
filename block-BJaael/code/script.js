let grid = document.querySelector(".grid");
let all = [];
for (let i = 0; i < 500; i++) {
  all.push(i);
}

let allData = all.map((val) => {
  let color = Math.floor(Math.random() * (499 - 100 + 1) + 100);
  return ` <div class="box">
    <span class="number">${color}</span>
  </div>`;
});

grid.innerHTML = allData.join("");

let arrayBox = document.querySelectorAll(".box");

arrayBox.forEach((ele) => {
  let spanno = ele.firstElementChild;
  let no = spanno.innerHTML;
  ele.style.backgroundColor = "#" + no;
  //   ele.style.margin = "1px";
});

// ele.addEventListener("mousemove", function () {
//     no = Math.floor(Math.random() * (499 - 100 + 1) + 100);
//     ele.style.backgroundColor = "#" + no;
//   });
grid.addEventListener("mousemove", function () {
  let arrayBox = document.querySelectorAll(".box");
  arrayBox.forEach((ele) => {
    no = Math.floor(Math.random() * (499 - 100 + 1) + 100);
    let spanno = ele.firstElementChild;
    spanno.innerHTML = no;
    ele.style.backgroundColor = "#" + no;
  });
});
