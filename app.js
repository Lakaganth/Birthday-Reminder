const textInput = document.querySelector("#form-input");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const birthday = document.querySelector("#bday");
const list = document.querySelector(".collections");

loadAllListners();

function loadAllListners() {
  textInput.addEventListener("submit", addBday);
}

function addBday(e) {
  fn = firstName.value;
  ln = lastName.value;
  bday = birthday.value;

  if (fn != "" && ln != "" && bday != "") {
    const li = document.createElement("li");
    const row = document.createElement("div");
    const col = document.createElement("div");
    const cardBG = document.createElement("div");
    const cardContent = document.createElement("div");
    const cardTitle = document.createElement("span");
    const del = document.createElement("a");

    li.className = "collection-item";
    row.className = "row";
    col.className = "col s12 m6";
    cardBG.className = "card pink darken-1";
    cardContent.className = "card-content white-text";
    cardTitle.className = "card-title";

    cardContent.appendChild(cardTitle);
    cardBG.appendChild(cardContent);
    col.appendChild(cardBG);
    row.appendChild(col);
    li.appendChild(row);
    list.appendChild(li);

    cardTitle.appendChild(document.createTextNode(`${fn}  ${ln}`));
    cardContent.appendChild(document.createTextNode(`${bday}`));

    console.log("Card success");
  } else {
    alert("Input all details");
  }

  e.preventDefault();
}
