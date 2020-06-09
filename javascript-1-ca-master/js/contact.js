const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

// Validate Form
function validateForm(event) {
  event.preventDefault();
  console.log("The form was submitted");

  // First Name DOM
  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");
  const firstNameValue = firstName.value;

  if (checkInputLength(firstNameValue) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  // Last Name DOM
  const lastName = document.querySelector("#lastName");
  const lastNameError = document.querySelector("#lastNameError");
  const lastNameValue = lastName.value;

  if (checkInputLength(lastNameValue) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  // Email DOM
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");
  const emailLength = document.querySelector("#invalidEmailLength");

  const emailValue = email.value;

  if (checkInputEmailLength(emailValue) === true) {
    emailLength.style.display = "none";
  } else {
    emailLength.style.display = "block";
  }

  if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }

  // Message DOM
  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");

  const messageValue = message.value;

  if ((checkInputLength, checkInputMessageLength(messageValue) === true)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

// Check Length
function checkLength(event) {
  const inputValue = event.target.value.trim();
  const valueLength = inputValue.length;
  console.log(valueLength);

  if (valueLength > 9) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

// Email Validate
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
// Check Email Character Length of Minimum 15
function checkInputEmailLength(value) {
  const trimmedValue = value.trim();
  if (trimmedValue.length < 15) {
    return false;
  } else {
    return true;
  }
}

// Check Message Length of minimum 10 characters
function checkInputMessageLength(value) {
  const trimmedValue = value.trim();
  if (trimmedValue.length < 10) {
    return false;
  } else {
    return true;
  }
}

// Check Input Length Trim
function checkInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 0) {
    return true;
  } else {
    return false;
  }
}
