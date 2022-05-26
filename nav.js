/*
let app = document.querySelector("#nav");

let header = document.createElement("h1");
header.textContent = "Non-Alcoholic Drinks";
let page = document.createElement("div");
page.style.width = "100%";
page.style.display = "flex";
page.style.flexDirection = "row";
page.style.flexWrap = "wrap";
page.style.justifyContent = "center";
app.append(page);

const addDrinkToDOM = (item) => {
  let drinkPic = document.createElement("img");
  let drinkName = document.createElement("p");
  let element = document.createElement("div");

  drinkPic.src = item.strDrinkThumb;
  drinkName.textContent = item.strDrink;

  drinkPic.setAttribute("alt", item.strDrink + " image");
  drinkPic.style.height = "200px";
  drinkPic.style.width = "200px";
  drinkName.style.width = "200px";
  element.append(drinkPic);
  element.append(drinkName);

  element.style.display = "flex";
  element.style.flex = "auto";
  element.style.flexDirection = "column";
  element.style.alignItems = "center";
  element.style.marginTop = "20px";
  element.style.flexBasis = "200px";
  element.style.flexGrow = "0";
  element.style.flexShrink = "0";
  element.classList.add("figure");

  page.append(element);
*/
let app = document.querySelector(".page");

navbar.style.display = "flex";
let navbar = document.createElement("nav");
let logo_header = document.createElement("div");
let logo = document.createElement("a");
logo.innerText("AH");
logo_header.append(logo);
navbar.append(logo_header);
let main_nav = document.createElement("ul");

let navdiv0 = document.createElement("li");
let about = document.createElement("a");
about.innerText("About");
navdiv0.append(about);

let navdiv1 = document.createElement("li");
let resume = document.createElement("a");
resume.innerText("Resume");
navdiv1.append(resume);

let navdiv2 = document.createElement("li");
let projects = document.createElement("a");
projects.innerText("Projects");
navdiv2.append(projects);

let navdiv3 = document.createElement("li");
let contact = document.createElement("a");
contact.innerText("Contact");
navdiv3.append(contact);

let navdiv4 = document.createElement("li");
let github = document.createElement("a");
github.innerText("Github");
navdiv4.append(github);

main_nav.append(navdiv0);
main_nav.append(navdiv1);
main_nav.append(navdiv2);
main_nav.append(navdiv3);
main_nav.append(navdiv4);
navbar.append(main_nav);
app.append(navbar);
