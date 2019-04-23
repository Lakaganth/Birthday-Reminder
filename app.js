const textInput = document.querySelector("#form-input");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const birthday = document.querySelector("#bday");
const list = document.querySelector(".collections");

loadAllListners();

function loadAllListners() {
  //Dom Load event
  document.addEventListener("DOMContentLoaded", getbabies);

  textInput.addEventListener("submit", addBday);
  list.addEventListener("click", delBday);
}

// Loading From Local Storage
function getbabies() {
  let babies;
  if (localStorage.getItem("babies") === null) {
    babies = [];
  } else {
    babies = JSON.parse(localStorage.getItem("babies"));
  }

  babies.forEach(baby => {
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

    cardTitle.appendChild(document.createTextNode(`${baby.fn}  ${baby.ln}`));
    cardContent.appendChild(document.createTextNode(`${baby.bday}`));
  });
}

function addBday(e) {
  const user = {
    fn: firstName.value,
    ln: lastName.value,
    bday: birthday.value
  };

  console.log(user);

  if (user.fn != "" && user.ln != "" && user.bday != "") {
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

    cardTitle.appendChild(document.createTextNode(`${user.fn}  ${user.ln}`));
    cardContent.appendChild(document.createTextNode(`${user.bday}`));
  } else {
    alert("Input all details");
  }

  storeToLocalStorage(user);

  e.preventDefault();
}

// Delete the birthday

function delBday(e) {
  const test =
    e.target.parentElement.parentElement.parentElement.parentElement
      .parentElement;

  console.log(test.firstChild.firstChild.firstChild);

  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();

      //Remove from LS
      removeBabyFromLS(
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement
      );
    }
  }
}

// ADD USER to LS

function storeToLocalStorage(bday) {
  let babies;
  if (localStorage.getItem("babies") === null) {
    babies = [];
  } else {
    babies = JSON.parse(localStorage.getItem("babies"));
  }

  babies.push(bday);

  localStorage.setItem("babies", JSON.stringify(babies));
}

// Remove user from LS

function removeBabyFromLS(delbaby) {
  let babies;
  if (localStorage.getItem("babies") === null) {
    babies = [];
  } else {
    babies = JSON.parse(localStorage.getItem("babies"));
  }

  babies.forEach((baby, index) => {
    const dl = `${baby.fn}  ${baby.ln}`;
    console.log(delbaby.firstChild.firstChild.firstChild.textContent);
    if (delbaby.firstChild.firstChild.firstChild.textContent === dl) {
      babies.splice(index, 1);
      console.log("Del Success");
    }
  });

  localStorage.setItem("babies", JSON.stringify(babies));
}
