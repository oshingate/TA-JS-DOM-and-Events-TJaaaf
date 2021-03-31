let houses = got.houses;

let allHouses = [];
houses.forEach((house) => {
  allHouses.push(house.name);
});

let allPeoples = [];
houses.forEach((house) => {
  house.people.map((person) => {
    allPeoples.push(person);
  });
});
let peopleByHouses = [];
houses.forEach((house, index) => {
  let h = {};
  h[house.name] = house.people;
  peopleByHouses.push(house.people);
});

// ================ actual code ================
// default function to display all cards
let displayUI = (person, index, arr) => {
  let article = document.createElement("article");
  article.classList.add("card", "flex-30");

  let imgDiv = document.createElement("div");
  imgDiv.classList.add("card-image-div");

  let img = document.createElement("img");
  img.classList.add("card-image");
  img.src = person.image;
  img.alt = "photo";
  imgDiv.append(img);

  let h2 = document.createElement("h2");
  h2.classList.add("card-name");
  h2.innerText = person.name;

  let p = document.createElement("p");
  p.classList.add("card-desc");
  p.innerText = person.description;

  let a = document.createElement("a");
  a.classList.add("card-btn");
  a.href = person.wikiLink;
  a.innerText = "know More";

  article.append(imgDiv, h2, p, a);

  mainDiv.append(article);
};

// to display peoples of houses which we click on tabs

let displayByHousesUI = (houseToDisplay) => {
  mainDiv.innerHTML = "";

  houseToDisplay.forEach((person, index, arr) => {
    displayUI(person, index, arr);
  });
};

let displayByHouses = (house, index, arr) => {
  let houseToDisplay = peopleByHouses[index];
  displayByHousesUI(houseToDisplay);
};

// to display list of houses on tabs

let tabDiv = document.querySelector(".tabs");
let tabUi = () => {
  // <li><a class="tab" href="#">Starks</a></li>
  allHouses.forEach((house, index, arr) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = "#";
    a.classList.add("tab");
    a.innerText = house;

    a.addEventListener("click", () => {
      displayByHouses(house, index, arr);
    });
    li.append(a);
    tabDiv.append(li);
  });
};

// the default :to display all peoples of GOT

let mainDiv = document.querySelector(".main-div");
let defaultUI = () => {
  mainDiv.innerHTML = "";
  allPeoples.forEach((person, index, arr) => {
    displayUI(person, index, arr);
  });
};

// to display on search in header

let onSearch = (searchStr) => {
  newAllPeoples = allPeoples.filter((person) => {
    return person.name.toLowerCase().includes(searchStr);
  });
  mainDiv.innerHTML = "";
  newAllPeoples.forEach((person, index, arr) => {
    displayUI(person, index, arr);
  });
};

let search = document.querySelector("#search");
search.addEventListener("keyup", () => {
  let searchStr = search.value;
  onSearch(searchStr);
});

tabUi();
defaultUI();
