const input = document.querySelector(".numput");
const buttons = document.querySelectorAll("button");
const operation = document.querySelectorAll(".operation");
const digit = document.querySelectorAll(".digit");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const exponentiation = document.querySelector("#exponentiation");

const DivAlt = document.querySelector(".divisionAlt")
const MulAlt = document.querySelector(".multiplicationAlt")
const ExpAlt = document.querySelector(".exponentiationAlt")


// Remove text
clear.addEventListener("click", () => {
  remove();
});


function remove() {
  input.value = "";
}


// Result
equals.addEventListener("click", () => {
  calculate();
});

function calculate() {
  try {
    if (input.value === "77+33" || input.value === "33+77") {
      input.value = "100";
    } else if (input.value === "") {
      input.value = "0";
    } else {
      input.value = eval(input.value);
    }
  } catch (e) {
    alert(e);
  }
}


// Division text
division.addEventListener("click", () => {
  AddDivText(DivAlt.innerText);
});

function AddDivText(value) {
  input.value += value;
}


// Multiplication text
multiplication.addEventListener("click", () => {
  AddMulText(MulAlt.innerText);
});

function AddMulText(value) {
  input.value += value;
}


// Exponentiation text
exponentiation.addEventListener("click", () => {
  AddExpText(ExpAlt.innerText);
});

function AddExpText(value) {
  input.value += value;
}


// Subtraction text
subtraction.addEventListener("click", () => {
  AddSubText(subtraction.innerText);
});

function AddSubText(value) {
  input.value += value;
}


// Addition text
addition.addEventListener("click", () => {
  AddSubText(addition.innerText);
});

function AddSubText(value) {
  input.value += value;
}


// Digit text
for (let i of digit) {
  if (i !== equals && i !== clear) {
    i.addEventListener("click", () => {
      DigText(i.innerText);
    });
  }
}

function DigText(value) {
  input.value += value;
}


// Enter support
document.addEventListener(
  "keydown",
  document.addEventListener("keyup", function (event) {
    if (event.code === "Enter") {
      calculate();
    }
  })
);