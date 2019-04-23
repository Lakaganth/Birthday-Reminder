const textInput = document.querySelector("#form-input");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const birthday = document.querySelector("#bday");
const list = document.querySelector(".collections");

loadAllListners();

function loadAllListners() {
  textInput.addEventListener("submit", addBday);
  list.addEventListener("click", delBday);
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
    cardBG.className = "card blue darken-1";
    cardContent.className = "card-content white-text";
    cardTitle.className = "card-title";
    del.className = "delete-item  secondary-content";

    del.innerHTML = '<i class="fas fa-times"></i>';

    cardTitle.appendChild(del);
    cardContent.appendChild(cardTitle);
    cardBG.appendChild(cardContent);
    col.appendChild(cardBG);
    row.appendChild(col);
    li.appendChild(row);
    list.appendChild(li);

    cardTitle.appendChild(document.createTextNode(`${fn}  ${ln}`));
    cardContent.appendChild(document.createTextNode(`${bday}`));
  } else {
    alert("Input all details");
  }

  e.preventDefault();
}

// Delete the birthday

function delBday(e) {
  console.log(
    e.target.parentElement.parentElement.parentElement.parentElement
      .parentElement
  );
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    }
  }
}
