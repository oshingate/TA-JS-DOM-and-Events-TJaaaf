let person = {};
let form = document.querySelector("form");
let submit = document.querySelector("form>button");
let data = document.querySelector(".data");

let dataname = document.querySelector(".data-name");
let dataemail = document.querySelector(".data-email");
let datainterest = document.querySelector(".data-interest");
let datacolor = document.querySelector(".data-color");
let datarating = document.querySelector(".data-rating");
let databookGenere = document.querySelector(".data-bookGenere");
let dataterms = document.querySelector(".data-terms");
let close = document.querySelector(".close");

// console.log(form);

let submitMethod = (event) => {
  event.preventDefault();
  //   console.dir(event.target);
  person.name = form.elements.name.value;
  // console.log(form.elements.email);
  person.email = form.elements.email.value;
  person.intrest = form.elements.gender.value;
  person.color = form.elements.color.value;
  person.rating = form.elements.rating.value;
  person.bookGenere = form.elements.bookGenere.value;
  person.terms = form.elements.terms.checked;
  console.log(person);

  form.style.display = "none";
  data.style.display = "block";
  dataname.innerText = `Hello ${person.name}`;
  dataemail.innerText = `Email :- ${person.email}`;
  datainterest.innerText = `You love:- ${person.intrest}`;
  datacolor.innerText = `Color:- ${person.color}`;
  datarating.innerText = `Rating:- ${person.rating}`;
  databookGenere.innerText = `Book Genere:- ${person.bookGenere}`;
  dataterms.innerText = `You Aggreed Terms:- ${person.terms}`;
};

form.addEventListener("submit", submitMethod);

close.addEventListener("click", () => {
  data.style.display = "none";
  form.style.display = "block";
});
