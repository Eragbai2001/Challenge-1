function showError(errorElement, errorMessage) {
  document.querySelector("." + errorElement).classList.add("display-error");
  document.querySelector("." + errorElement).innerHTML = errorMessage;
  let errorField = document.querySelector("." + errorElement);
  errorField.classList.add("display-error");
  errorField.innerHTML = errorMessage;
  // Change the background color of the email input field when there is an error
  let emailInputField = document.querySelector('input[name="email"]');
  if (emailInputField) {
    emailInputField.style.backgroundColor = "#ffcccc"; // Example color: light red
  }
}

function clearError() {
  let errors = document.querySelectorAll(".error");
  for (let error of errors) {
    error.classList.remove("display-error");
  }
}
let form = document.forms["email-form"];
form.onsubmit = function (event) {
  clearError();
  if (form.email.value === "") {
    showError("email-error", "You have to enter an email ");
    return false;
  }
  if (!validateEmail(form.email.value)) {
    showError("email-error", "valid email is required ");
    return false;
  }

  event.preventDefault();
};
function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
