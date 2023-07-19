const page1 = document.querySelector(".page1");
const modal = document.querySelector(".modal");
const nameTitle = document.getElementById("name-title");
const dateTitle = document.querySelector("#date-title");
const counterTitle = document.querySelector("counter-title");
const dayScore = document.querySelector("day-score");
const hourScore = document.querySelector("hour-score");
const minutScore = document.querySelector("minut-score");
const secondScore = document.querySelector("second-score");
const btn = document.getElementById("btn");
const modalTitle = document.getElementById("modal-title");
const formEl = document.querySelector("form");

let date = "";
nameTitle.addEventListener("input", (e) => {
  e.preventDefault();
  let values = e.target.value;
});

formEl.addEventListener("submit", (i) => {
  i.preventDefault();
  if ((nameTitle.value)) {
    page1.style.display = "none";
    modal.style.display = "block";
    modalTitle.textContent = values;
    date = dateTitle.value;
    console.log(date);
  }
  console.log(nameTitle, dateTitle);
});
