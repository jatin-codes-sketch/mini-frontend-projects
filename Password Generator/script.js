const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.querySelector(".range-value");
const passwordValue = document.querySelector("#pw");
const generateBtn = document.querySelector(".btn");
const copyBtn = document.querySelector(".fa-copy");
const uppercaseCheckbox = document.querySelector("input[name='uppercase']");
const lowercaseCheckbox = document.querySelector("input[name='lowercase']");
const numberCheckbox = document.querySelector("input[name='number']");
const symbolCheckbox = document.querySelector("input[name='symbol']");
const strengthLabel = document.getElementById("strength-label");
const strengthBar = document.querySelector(".strength-bar");


const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?/";


rangeInput.addEventListener("input", () => {
  rangeValue.textContent = rangeInput.value;
  updateStrength();
});

[uppercaseCheckbox, lowercaseCheckbox, numberCheckbox, symbolCheckbox].forEach(cb =>
  cb.addEventListener("change", updateStrength)
);


generateBtn.addEventListener("click", makePassword);


copyBtn.addEventListener("click", () => {
  if (!passwordValue.value) return;
  navigator.clipboard.writeText(passwordValue.value);
  copyBtn.style.color = "green";
  setTimeout(() => (copyBtn.style.color = "#718096"), 1000);
});

function makePassword() {
  const length = Number(rangeInput.value);

  const activeSets = [];
  if (uppercaseCheckbox.checked) activeSets.push(upperChars);
  if (lowercaseCheckbox.checked) activeSets.push(lowerChars);
  if (numberCheckbox.checked) activeSets.push(numberChars);
  if (symbolCheckbox.checked) activeSets.push(symbolChars);

  if (activeSets.length === 0) {
    alert("Please select at least one option!");
    return;
  }

  let allChars = activeSets.join("");
  let password = "";

  
  activeSets.forEach(set => {
    password += set[Math.floor(Math.random() * set.length)];
  });


  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  
  password = password.split("").sort(() => 0.5 - Math.random()).join("");

  passwordValue.value = password;
}


function updateStrength() {
  const length = Number(rangeInput.value);
  let setsCount = 0;
  if (uppercaseCheckbox.checked) setsCount++;
  if (lowercaseCheckbox.checked) setsCount++;
  if (numberCheckbox.checked) setsCount++;
  if (symbolCheckbox.checked) setsCount++;

  let score = setsCount;

  if (length >= 12) score++;
  if (length >= 16) score++;

  let strength = "Weak";
  let width = "20%";
  let color = "red";

  if (score >= 5) {
    strength = "Strong";
    width = "100%";
    color = "green";
  } else if (score === 4) {
    strength = "Medium";
    width = "70%";
    color = "orange";
  } else if (score === 3) {
    strength = "Weak";
    width = "40%";
    color = "orangered";
  }

  strengthLabel.textContent = strength;
  strengthBar.style.width = width;
  strengthBar.style.backgroundColor = color;
}


updateStrength();
