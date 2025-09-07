const form = document.querySelector(".registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");


function showError(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  small.innerText = message;
  small.style.visibility = "visible";
  input.style.border = "2px solid #ff4d4d";
}


function showSuccess(input) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  small.innerText = "";
  small.style.visibility = "hidden";
  input.style.border = "2px solid #4dff88";
}


function checkUsername() {
  const value = username.value.trim();
  if (value.length < 4 || value.length > 15) {
    showError(username, "Username must be 4–15 characters");
    return false;
  } else {
    showSuccess(username);
    return true;
  }
}


function checkEmail() {
  const value = email.value.trim();
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(value)) {
    showError(email, "Enter a valid email address");
    return false;
  } else {
    showSuccess(email);
    return true;
  }
}


function checkPassword() {
  const value = password.value.trim();
  const re = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  if (!re.test(value)) {
    showError(
      password,
      "Password must be 8+ chars, 1 capital & 1 symbol"
    );
    return false;
  } else {
    showSuccess(password);
    return true;
  }
}


function checkConfirmPassword() {
  const passwordValue = password.value.trim();
  const confirmValue = confirmPassword.value.trim();

  if (confirmValue === "") {
    showError(confirmPassword, "Please confirm your password");
    return false;
  } else if (passwordValue !== confirmValue) {
    showError(confirmPassword, "Passwords do not match");
    return false;
  } else {
    showSuccess(confirmPassword);
    return true;
  }
}


form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const isUsernameValid = checkUsername();
  const isEmailValid = checkEmail();
  const isPasswordValid = checkPassword();
  const isConfirmValid = checkConfirmPassword();

  if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmValid) {
    alert("✅ Registration Successful!");
    form.reset();

    
    [username, email, password, confirmPassword].forEach((input) => {
      input.style.border = "none";
    });
  }
});
