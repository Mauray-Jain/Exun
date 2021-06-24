let form = document.querySelector("form");
let nameInput = document.querySelector("input#name");
let emailInput = document.querySelector("input#email");
let yearOfGraduationInput = document.querySelector("input#year-of-graduation");
let reasonInput = document.querySelector("textarea#reason");
let experienceInput = document.querySelector("textarea#experience");
let departmentInput = document.querySelector("select#department");
let submitButton = document.querySelector("input#submit");
const departments = ["engineering", "sales", "marketing", "administration"];

const isNameCorrect = (name) => (name === "" ? "Name cannot be empty." : true);
const isEmailCorrect = (email) =>
  email === "" ? "Email cannot be empty" : true;
const isYearOfGraduationCorrect = (year) =>
  typeof year === "number" && year < 2025 && year > 1990
    ? true
    : "Enter a valid graduation year.";
const isReasonCorrect = (reason) =>
  reason === "" ? "The reason to join cannot be empty" : true;
const isExperienceCorrect = (experience) =>
  experience === "" ? "Relevant Experience cannot be empty." : true;
const isDepartmentCorrect = (department) =>
  departments.includes(department) ? true : "Invalid Department.";

function handleSubmit(e) {
  e.preventDefault();
  console.log("clicked");
  let validation = [
    isNameCorrect(nameInput.value),
    isEmailCorrect(emailInput.value),
    isYearOfGraduationCorrect(Number(yearOfGraduationInput.value)),
    isReasonCorrect(reasonInput.value),
    isExperienceCorrect(experienceInput.value),
    isDepartmentCorrect(departmentInput.value)
  ];
  let areFieldsCorrect = validation.every((element) => element === true);
  if (!areFieldsCorrect) {
    alert(validation.find((element) => typeof element === "string"));
    return;
  }
  alert(`Hello ${nameInput.value} <${emailInput.value}> batch ${
    yearOfGraduationInput.value
  }. You have enrolled to join ${
    departmentInput.value.charAt(0).toUpperCase() +
    departmentInput.value.slice(1)
  } Department.
  Your experience: ${experienceInput.value}.
  Your reasons to join us are: ${reasonInput.value}`);
  form.reset();
}

submitButton.addEventListener("click", handleSubmit);
