let totalMoves = 10;
let yourMove = 0;
let compMove = 0;
let moveNo = 1;

let youdiv = document.querySelector(".you-div");
let compdiv = document.querySelector(".comp-div");
let clickHere = document.querySelector(".dice");
let dicehead = document.querySelector(".dice-head");
let dicebox = document.querySelector(".dice-box");
let winnerName = document.querySelector(".winner-name");
let winner = document.querySelector(".winner");

// clickHereEvent
let stopGame = () => {
  clickHere.addEventListener("click", (event) => {
    dicebox.innerHTML = "";
  });
};

let clickHereEvent = (e) => {
  moveNo++;
  let randomNo = Math.floor(Math.random() * 6);
  clickHere.innerHTML = `<img src=${dice[randomNo].photo} alt=""  />`;

  if (moveNo % 2 === 0) {
    if (yourMove + (randomNo + 1) < 10) {
      yourMove += randomNo + 1;
      console.log(yourMove);

      if (yourMove == 9) {
        winnerName.innerText = "You";
        winner.classList.remove("winner-inactive");
        stopGame();
      }
    }
  } else {
    if (compMove + (randomNo + 1) < 10) {
      compMove += randomNo + 1;
      if (compMove == 9) {
        winnerName.innerText = "computer";
        winner.classList.remove("winner-inactive");
        stopGame();
      }
    }
  }
  displayUI();
};
// display ui func
let displayUI = () => {
  youdiv.innerHTML = "";
  compdiv.innerHTML = "";
  for (let i = 0; i < totalMoves; i++) {
    let box1 = document.createElement("div");
    box1.classList.add("box1");
    box1.setAttribute("data-index", i);
    youdiv.append(box1);

    let box2 = document.createElement("div");
    box2.classList.add("box2");
    box2.setAttribute("data-index", i);
    compdiv.append(box2);

    if (i == yourMove && i == compMove) {
      box1.innerHTML = `<img src="./assets/blue.jpeg" alt=""  />`;
      box2.innerHTML = `<img src="./assets/red.png" alt=""  />`;
    } else if (i == yourMove) {
      box1.innerHTML = `<img src="./assets/blue.jpeg" alt=""  />`;
    } else if (i == compMove) {
      box2.innerHTML = `<img src="./assets/red.png" alt=""  />`;
    } else {
    }
    if (moveNo % 2 === 1) {
      dicehead.innerText = "Your Move";
    } else {
      dicehead.innerText = "Comp Move";
    }
  }
  console.log(moveNo);
};

clickHere.addEventListener("click", (event) => {
  clickHereEvent(event, moveNo);
});

displayUI();
