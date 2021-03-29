let youSpan = document.querySelector(".you-span");
let youIcons = document.querySelector(".you-icon");
let allIcons = document.querySelectorAll("i");
let compSpan = document.querySelector(".comp-span");
let compIcons = document.querySelectorAll(".comp-icon>i");
let displayWinner = document.querySelector(".display-h2");
let reset = document.querySelector(".reset");
let youWins = 0;
let compWins = 0;

clickHandler = (event) => {
  allIcons.forEach((icon) => {
    icon.style.color = "black";
  });

  let no = Math.floor(Math.random() * (3 - 0) + 0);

  if (event.target.classList[2] === compIcons[no].classList[2]) {
    // console.log("tie");
    displayWinner.innerText = "It's a Tie !";
    displayWinner.style.backgroundColor = "yellow";
  } else if (
    (event.target.classList[2] === "rock" &&
      compIcons[no].classList[2] == "Scissors") ||
    (event.target.classList[2] === "paper" &&
      compIcons[no].classList[2] == "rock") ||
    (event.target.classList[2] === "Scissors" &&
      compIcons[no].classList[2] == "paper")
  ) {
    // console.log("win");
    displayWinner.innerText = "You Win :)";
    displayWinner.style.backgroundColor = "green";
    youWins += 1;
  } else {
    // console.log("loose");
    displayWinner.innerText = "You Loose :(";
    displayWinner.style.backgroundColor = "red";

    compWins += 1;
  }

  youSpan.innerText =
    "( " + youWins + " )   " + " ---" + event.target.classList[2];
  youSpan.style.color = "blue";
  event.target.style.color = "red";

  compIcons[no].style.color = "red";
  compSpan.innerText =
    "( " + compWins + " )   " + " ---" + compIcons[no].classList[2];
  compSpan.style.color = "blue";
};
youIcons.addEventListener("click", clickHandler);

reset.addEventListener("click", () => {
  allIcons.forEach((icon) => {
    icon.style.color = "black";
  });
  youSpan.innerText = "";

  compSpan.innerText = "";
  youWins = 0;
  compWins = 0;
});
