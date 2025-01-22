const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordEl1 = document.getElementById("password1");
let passwordEl2 = document.getElementById("password2");

let passwordLength = 15;
passwordEl1.textContent = "";
passwordEl2.textContent = "";

// Función para generar una contraseña aleatoria
function generatePassword() {
  passwordEl1.textContent = "";
  passwordEl2.textContent = "";

  for (let i = 0; i < passwordLength; i++) {
    passwordEl1.textContent +=
      characters[Math.floor(Math.random() * characters.length)];
    passwordEl2.textContent +=
      characters[Math.floor(Math.random() * characters.length)];
  }
}

// Función para cambiar la longitud de la contraseña
function changePasswordLength() {
  passwordLength = document.getElementById("passwordLength").value;
}

// Evento para generar contraseñas al hacer clic en el botón
document
  .getElementById("passwordLength")
  .addEventListener("input", changePasswordLength);

// Adicionar evento para copiar texto al portapapeles
passwordEl1.addEventListener("click", copyClipboard1);
passwordEl2.addEventListener("click", copyClipboard2);

function copyClipboard1() {
  navigator.clipboard.writeText(passwordEl1.textContent);
}

function copyClipboard2() {
  navigator.clipboard.writeText(passwordEl2.textContent);
}
