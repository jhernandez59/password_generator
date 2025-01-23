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
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
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

// Escuchar cambio en input passwordLength
let passwordLength;
let passwordLengthEl = document.getElementById("passwordLength");
passwordLengthEl.addEventListener("input", function () {
  passwordLength = parseInt(passwordLengthEl.value, 10); // 10 es la base decimal

  console.log("Longitud de la contraseña:", passwordLength);
});
if (isNaN(passwordLength)) {
  passwordLength = 7;
}

// Escuchar cambio en checkbox symbols
let isSymbolsElChecked;
let symbolsEl = document.getElementById("symbols");
symbolsEl.addEventListener("change", function () {
  isSymbolsElChecked = symbolsEl.checked;

  if (isSymbolsElChecked) {
    console.log("Symbols está seleccionado.");
  } else {
    console.log("Symbols NO está seleccionado.");
  }
});

// Escuchar cambio en checkbox numbers
let isNumbersElChecked;
let numbersEl = document.getElementById("numbers");
numbersEl.addEventListener("change", function () {
  isNumbersElChecked = numbersEl.checked;

  if (isNumbersElChecked) {
    console.log("Numbers está seleccionado.");
  } else {
    console.log("Numbers NO está seleccionado.");
  }
});

//
let passwordEl1 = document.getElementById("password1");
let passwordEl2 = document.getElementById("password2");

passwordEl1.textContent = "";
passwordEl2.textContent = "";

// Función para generar una contraseña aleatoria
function generatePassword() {
  passwordEl1.textContent = "";
  passwordEl2.textContent = "";

  let charsSet = [];

  if (!isSymbolsElChecked && !isNumbersElChecked) {
    charsSet = characters;
  }

  if (isSymbolsElChecked && !isNumbersElChecked) {
    charsSet = [...characters, ...symbols];
  }

  if (isNumbersElChecked && !isSymbolsElChecked) {
    charsSet = [...characters, ...numbers];
  }

  if (isSymbolsElChecked && isNumbersElChecked) {
    charsSet = [...characters, ...symbols, ...numbers];
  }

  for (let i = 0; i < passwordLength; i++) {
    passwordEl1.textContent +=
      charsSet[Math.floor(Math.random() * charsSet.length)];
    passwordEl2.textContent +=
      charsSet[Math.floor(Math.random() * charsSet.length)];
  }
}

// Adicionar evento para copiar texto al portapapeles
passwordEl1.addEventListener("click", copyClipboard1);
passwordEl2.addEventListener("click", copyClipboard2);

function copyClipboard1() {
  navigator.clipboard.writeText(passwordEl1.textContent);
}

function copyClipboard2() {
  navigator.clipboard.writeText(passwordEl2.textContent);
}
