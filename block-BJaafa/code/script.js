let content = document.querySelector(".content");

console.log(mainData);
let data = [...mainData];

// UI code
let displayUI = (ele) => {
  content.innerHTML = "";
  let randomNo = Math.floor(Math.random() * data.length);

  let method = data[randomNo];
  console.log(method);

  let namediv = document.createElement("div");
  namediv.classList.add("div-name");
  let nameh3 = document.createElement("h3");
  nameh3.classList.add("name");
  nameh3.innerText = method.name;
  namediv.append(nameh3);

  let paradiv = document.createElement("div");
  paradiv.classList.add("div-para");
  let parahead = document.createElement("h4");
  parahead.classList.add("para-head");
  parahead.innerText = "Parameters:";
  let para = document.createElement("p");
  para.innerText = method.parameter;
  paradiv.append(parahead, para);

  let returndiv = document.createElement("div");
  returndiv.classList.add("div-return");
  let returnhead = document.createElement("h4");
  returnhead.classList.add("return-head");
  returnhead.innerText = "Returns:";
  let returns = document.createElement("p");
  returns.innerText = method.return;
  returndiv.append(returnhead, returns);

  let examplediv = document.createElement("div");
  examplediv.classList.add("div-example");
  let examplehead = document.createElement("h4");
  examplehead.classList.add("example-head");
  examplehead.innerText = "Example:";
  let example = document.createElement("p");
  example.innerText = method.example;
  examplediv.append(examplehead, example);

  let aboutdiv = document.createElement("div");
  aboutdiv.classList.add("div-about");
  let abouthead = document.createElement("h4");
  abouthead.classList.add("about-head");
  abouthead.innerText = "about:";
  let about = document.createElement("p");
  about.innerText = method.about;
  aboutdiv.append(abouthead, about);

  content.append(namediv, paradiv, returndiv, examplediv, aboutdiv);
};

displayUI();
