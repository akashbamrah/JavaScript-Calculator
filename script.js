const textInput = document.querySelector("#input");
const clearButton = document.querySelector("#clear");
const negPosButton = document.querySelector("#negPos");
const modButton = document.querySelector("#modulus");
const divButton = document.querySelector("#divide");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const multButton = document.querySelector("#multiply");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const minusButton = document.querySelector("#minus");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const plusButton = document.querySelector("#plus");
const zeroButton = document.querySelector("#zero");
const dotButton = document.querySelector("#dot");
const equalsButton = document.querySelector("#equals");

let str = "";
clearButton.addEventListener("click", (e) => {
  textInput.value = "";
});
negPosButton.addEventListener("click", (e) => {
  str = "-" + textInput.value;
  textInput.value = str;
});
modButton.addEventListener("click", (e) => {
  str = textInput.value + modButton.innerText;
  textInput.value = str;
});
divButton.addEventListener("click", (e) => {
  str = textInput.value + divButton.innerText;
  textInput.value = str;
});
sevenButton.addEventListener("click", (e) => {
  str = textInput.value + sevenButton.innerText;
  textInput.value = str;
});
eightButton.addEventListener("click", (e) => {
  str = textInput.value + eightButton.innerText;
  textInput.value = str;
});
nineButton.addEventListener("click", (e) => {
  str = textInput.value + nineButton.innerText;
  textInput.value = str;
});
multButton.addEventListener("click", (e) => {
  str = textInput.value + multButton.innerText;
  textInput.value = str;
});
fourButton.addEventListener("click", (e) => {
  str = textInput.value + fourButton.innerText;
  textInput.value = str;
});
fiveButton.addEventListener("click", (e) => {
  str = textInput.value + fiveButton.innerText;
  textInput.value = str;
});
sixButton.addEventListener("click", (e) => {
  str = textInput.value + sixButton.innerText;
  textInput.value = str;
});
minusButton.addEventListener("click", (e) => {
  str = textInput.value + minusButton.innerText;
  textInput.value = str;
});
oneButton.addEventListener("click", (e) => {
  str = textInput.value + oneButton.innerText;
  textInput.value = str;
});
twoButton.addEventListener("click", (e) => {
  str = textInput.value + twoButton.innerText;
  textInput.value = str;
});
threeButton.addEventListener("click", (e) => {
  str = textInput.value + threeButton.innerText;
  textInput.value = str;
});
plusButton.addEventListener("click", (e) => {
  str = textInput.value + plusButton.innerText;
  textInput.value = str;
});
zeroButton.addEventListener("click", (e) => {
  str = textInput.value + zeroButton.innerText;
  textInput.value = str;
});
dotButton.addEventListener("click", (e) => {
  str = textInput.value + dotButton.innerText;
  textInput.value = str;
});
equalsButton.addEventListener("click", (e) => {
  str = eval(textInput.value);
  textInput.value = str;
});

textInput.addEventListener("keyup", (e) => {
  if (e.key === "Backspace") {
    str = str.substring(0, str.length - 1);
    textInput.value = str;
  } else if (!isNaN(e.key)) {
    str = textInput.value;
  } else {
    textInput.value = str;
  }
});
