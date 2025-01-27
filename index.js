const characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "?",
  "{",
  "}",
  "-",
  "+",
  "=",
  "[",
  "]",
  "|",
  "~",
  "`",
  "@",
];

const passElOne = document.querySelector("#pass-el-one");
const passElTwo = document.querySelector("#pass-el-two");
const passElThree = document.querySelector("#pass-el-three");
const passElFour = document.querySelector("#pass-el-four");
const generateBtn = document.querySelector("#generate");
const lengthValue = document.querySelector("#length-value");

//get random letter from characters array
function randomCharacter() {
  let randomNumber = Math.floor(Math.random() * characters.length);
  return characters[randomNumber];
}

//ability to set password length
function setPassLength() {
  let inputValue = lengthValue.value;

  //setting default
  if (inputValue === "") {
    return 12;
  }
  return inputValue;
}

//generating the password
function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += randomCharacter();
  }
  return password;
}

// rendering password to screen
function renderPassword() {
  passElOne.textContent = "";
  passElTwo.textContent = "";
  passElThree.textContent = "";

  passElFour.textContent = "";

  let length = setPassLength();
  passElOne.textContent += generatePassword(length);
  passElTwo.textContent += generatePassword(length);
  passElThree.textContent += generatePassword(length);
  passElFour.textContent += generatePassword(length);
}

//ability to copy to clipboard
function copyToClipboard(e) {
  let password = e.target;
  navigator.clipboard.writeText(password.textContent).then((res) => {
    console.log("Input data copied to clipboard successfully");
  });

  /* Alert the copied text */
}

passElOne.addEventListener("click", copyToClipboard);
passElTwo.addEventListener("click", copyToClipboard);
passElThree.addEventListener("click", copyToClipboard);
passElFour.addEventListener("click", copyToClipboard);

generateBtn.addEventListener("click", renderPassword);
