let form = document.querySelector("form");
let list = document.querySelector(".list");

let addName = (event) => {
  event.preventDefault();

  let name = form.elements.moviename;

  let movie = document.createElement("div");
  movie.classList.add("movie");

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  let h2 = document.createElement("h2");
  h2.innerText = name.value;
  let i = document.createElement("i");
  i.classList.add("far", "fa-times-circle", "cross");
  movie.append(checkbox, h2, i);
  list.append(movie);
  // ===============
  let crossList = document.querySelectorAll(".cross");
  handlecross = (event) => {
    event.target.parentElement.style.display = "none";
    console.log("done");
  };
  crossList.forEach((e) => {
    e.addEventListener("click", handlecross);
  });

  //   ======

  name.value = "";
};

form.addEventListener("submit", addName);
