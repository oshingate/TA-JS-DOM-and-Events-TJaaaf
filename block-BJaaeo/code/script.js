let total = "";

let display = document.querySelector(".display");
display.innerText = total;
let td = document.querySelectorAll("td");
let table = document.querySelector("table");

table.addEventListener("click", (event) => {
  if (
    event.target.classList[1] === "pri" ||
    event.target.classList[1] === "sec" ||
    event.target.classList[1] === "ter" ||
    event.target.classList[1] === "quar"
  ) {
    if (event.target.classList[1] === "sec") {
      total = `${total}` + `${event.target.innerText}`;
      display.innerText = total;
    } else if (event.target.classList[1] === "pri") {
      total = `${total}` + " " + `${event.target.innerText}` + " ";
      display.innerText = total;
    } else if (event.target.classList[1] === "quar") {
      total = "";
      display.innerText = "0";
    } else if (event.target.classList[1] === "ter") {
      //   let split = total.split(" ");
      //   if (split[1] === "+") {
      //     total = Number(split[0]) + Number(split[2]);
      //   } else if (split[1] === "-") {
      //     total = Number(split[0]) - Number(split[2]);
      //   } else if (split[1] === "*") {
      //     total = Number(split[0]) * Number(split[2]);
      //   } else if (split[1] === "/") {
      //     total = Number(split[0]) / Number(split[2]);
      //   }
      total = eval(total);
      if (total !== "NaN" && total !== "undefined" && total !== "Infinity") {
        display.innerText = total;
      } else {
        setTimeout(() => {
          display.innerText = "try again";
        }, 1000);
      }
    }
  }
});
