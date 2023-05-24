/* Code Made By LaturbDevs | Vitor Almeida */
function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  const displayValue = document.getElementById("display").value;
  const result = evaluateExpression(displayValue);
  document.getElementById("display").value = result;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function clearLastDigit() {
  const displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.slice(0, -1);
}

let parenthesesOpen = false;

function toggleParentheses() {
  const displayValue = document.getElementById("display").value;
  if (parenthesesOpen) {
    document.getElementById("display").value = displayValue + ")";
    parenthesesOpen = false;
  } else {
    document.getElementById("display").value = displayValue + "(";
    parenthesesOpen = true;
  }
}

const toggleButton = document.querySelector('.btn-toggle');
toggleButton.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  const calculator = document.querySelector('.calculator');
  const body = document.querySelector('body');
  calculator.classList.toggle('dark-mode');
  body.classList.toggle('dark-mode');
}

function evaluateExpression(expression) {
  expression = expression.replace(/%/g, '/100');
  return eval(expression);
}

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    handleButtonClick(value);
  });
});

function handleButtonClick(value) {
  if (value === '=') {
    calculate();
  } else if (value === 'C') {
    clearDisplay();
  } else if (value === 'CE') {
    clearLastDigit();
  } else if (value === '()') {
    toggleParentheses();
  } else {
    addToDisplay(value);
  }
}