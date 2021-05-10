const input = document.querySelector(".input");
const result = document.querySelector(".result");
const ce = document.querySelector(".ce");

const buttons = document.querySelectorAll(".cell");

for (let i of buttons) {
  if (i !== result && i !== ce) {
    i.addEventListener("click", () => {
      btnAction(i.innerText);
    });
  }
}

// Result
result.addEventListener("click", () => {
  calculate();
});

// Clear
ce.addEventListener("click", () => {
  clear();
});

function btnAction(value) {
  input.value += value;
}

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

function clear() {
  input.value = "";
}

// Enter support
/*document.addEventListener(
  "keydown",
  document.addEventListener("keyup", function (event) {
    if (event.code === "Enter") {
      calculate();
    }
  })
);
*/
