const cardsArray = [
  {
    name: "cat",
    img: "../assets/cat.jpg",
    match: false,
  },
  {
    name: "cheetah",
    img: "../assets/cheetah.jpg",
    match: false,
  },
  {
    name: "dog",
    img: "../assets/dog.jpg",
    match: false,
  },
  {
    name: "duck",
    img: "../assets/duck.jpg",
    match: false,
  },
  {
    name: "monkey",
    img: "../assets/monkey.jpg",
    match: false,
  },
  {
    name: "tiger",
    img: "../assets/tiger.jpg",
    match: false,
  },
  {
    name: "turtle",
    img: "../assets/turtle.jpg",
    match: false,
  },
  {
    name: "zebra",
    img: "../assets/zebra.jpg",
    match: false,
  },
];
let allCardsArrayOriginal = cardsArray.concat(cardsArray);
let allCardsArray = [...allCardsArrayOriginal];

let gameDiv = document.querySelector(".game-div");

let defaultUI = (oneCard, index, arr) => {
  let card = document.createElement("div");
  card.classList.add("card", "flex-25");
  card.style.backgroundImage = `url(../assets/cardbg.jpeg)`;
  card.setAttribute("data-index", index);
  gameDiv.append(card);
};

let displayUI = () => {
  allCardsArray.sort(() => 0.5 - Math.random());
  gameDiv.innerHTML = "";
  allCardsArray.forEach((oneCard, index, arr) => {
    defaultUI(oneCard, index, arr);
  });
};

// =================== click event=================
let count = 0;
let prevSelection = "";

let selectEvent = (e, count) => {
  let indexOfCurr = e.target.dataset.index;
  //   for count less than 2
  if (count < 3) {
    // if count =1
    if (count === 1) {
      e.target.classList.add("selected");
      e.target.style.backgroundImage = `url(${allCardsArray[indexOfCurr].img})`;
      prevSelectionDiv = e.target;
      prevSelection = allCardsArray[indexOfCurr];
    }
    // if count=2
    else if (count === 2) {
      e.target.classList.add("selected");
      e.target.style.backgroundImage = `url(${allCardsArray[indexOfCurr].img})`;
      console.log("matching");
      //  if count =2 and didnt match
      if (prevSelection.name != allCardsArray[indexOfCurr].name) {
        setTimeout(function () {
          e.target.classList.toggle("selected");
          e.target.style.backgroundImage = "url(../assets/cardbg.jpeg)";
          prevSelectionDiv.classList.toggle("selected");
          prevSelectionDiv.style.backgroundImage = "url(../assets/cardbg.jpeg)";
          count = 0;

          console.log("didnt match");
        }, 500);
        gameDiv.addEventListener("click", (event) => {
          if (event.target.classList.contains("card")) {
            ++count;
            selectEvent(event, count);
          }
        });
      }
      // if count =2 and match
      else {
        prevSelection.match = true;
        allCardsArray[indexOfCurr].match = true;
        count = 0;
        console.log(count);

        gameDiv.addEventListener("click", (event) => {
          if (event.target.classList.contains("card")) {
            ++count;
            selectEvent(event, count);
          }
        });
        if (allCardsArray.filter((e) => e.match == false).length == 0) {
          let greet = document.querySelector(".done");
          greet.classList.toggle("display-none");
          let btn = document.querySelector(".try");
          btn.addEventListener("click", () => {
            displayUI();
            greet.classList.toggle("display-none");
          });
        }
      }
    }
  }
};

gameDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("card")) {
    ++count;
    selectEvent(event, count);
  }
});

displayUI();
