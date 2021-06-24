let body = document.querySelector("body");
let container = document.querySelector("div.container");
let homeLink = document.querySelector("a#home");
let dateInput = document.querySelector("input#date");
let monthInput = document.querySelector("input#month");
let submitBtn = document.querySelector("input#submit");

let home = body.innerHTML;

homeLink.addEventListener("click", () => (body.innerHTML = home));

submitBtn.addEventListener("click", handleSubmit);

let monthMap = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
};

const isDateCorrect = (date, month) => {
  let validation = [];
  typeof month === "number" && month >= 1 && month <= 12
    ? validation.push(true)
    : validation.push("Invalid Month");
  if (month % 2 !== 0) {
    if (month <= 7) {
      date <= 31 && date >= 1
        ? validation.push(true)
        : validation.push("Invalid Date");
    } else {
      date <= 30 && date >= 1
        ? validation.push(true)
        : validation.push("Invalid Date");
    }
  } else if (month % 2 === 0 && month > 2) {
    if (month <= 6) {
      date <= 30 && date >= 1
        ? validation.push(true)
        : validation.push("Invalid Date");
    } else {
      date <= 31 && date >= 1
        ? validation.push(true)
        : validation.push("Invalid Date");
    }
  } else if (month === 2) {
    date <= 29 && date >= 1
      ? validation.push(true)
      : validation.push("Invalid Date");
  }
  return validation;
};

async function handleSubmit(e) {
  e.preventDefault();
  const validation = isDateCorrect(
    Number(dateInput.value),
    Number(monthInput.value)
  );
  const areFieldsCorrect = validation.every((element) => element === true);
  if (areFieldsCorrect) {
    let response = await fetch(
      `https://history.muffinlabs.com/date/${monthInput.value}/${dateInput.value}`
    );
    let facts = await response.json();
    let html = `<header>
    <nav class="navbar">
      <a href="/" target="_self" id="home">See facts for Particular Date</a>
    </nav>
  </header>
  <div class="content"><h3 id="event">Events that Happened on ${
    dateInput.value
  } ${monthMap[monthInput.value]}</h3>\n`;
    facts.data.Events.forEach(
      (element) =>
        (html += `\t<p class="events"><span class="year">${element.year}</span> - <span class="text">${element.text}</span></p>\n`)
    );
    html += `<h3 id="birth">Births that Happened on ${dateInput.value} ${
      monthMap[monthInput.value]
    }</h3>\n`;
    facts.data.Births.forEach(
      (element) =>
        (html += `\t<p class="births"><span class="year">${element.year}</span> - <span class="text">${element.text}</span></p>\n`)
    );
    html += `<h3 id="death">Deaths that Happened on ${dateInput.value} ${
      monthMap[monthInput.value]
    }</h3>\n`;
    facts.data.Deaths.forEach(
      (element) =>
        (html += `\t<p class="deaths"><span class="year">${element.year}</span> - <span class="text">${element.text}</span></p>\n`)
    );
    html += `</div>`;
    body.removeChild(container);
    body.innerHTML = html;
  } else {
    alert(validation.find((element) => typeof element === "string"));
  }
}
