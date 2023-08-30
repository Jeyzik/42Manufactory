let indicator = document.querySelector(".progress");
let documentWidth = document.documentElement.scrollWidth;
let viewportWidth = document.documentElement.clientWidth;

console.log(viewportWidth);
window.onscroll = function () {
  console.log(scrollX * 1.798);
  let correctScrollX = scrollX * 1.798;
  let percentageScrolled =
    (correctScrollX / (documentWidth - viewportWidth)) * 1945;
  indicator.style.width = percentageScrolled + "px";
  indicator.style.backgroundColor = "#6638b6";
};

const hamb = document.querySelector(".burger");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("active");
  if (this.classList.contains("active")) {
    hamb.src = "../img/burger.svg";
  } else {
    hamb.src = "../img/close.svg";
  }
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}
