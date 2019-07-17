const firstNumberEl = document.getElementById('firstNumber');
const secondNumberEl = document.getElementById('secondNumber');
const btn = document.getElementById('doit');
const action = document.getElementById('inputGroupAction');
const result = document.getElementById('result');
const error = document.getElementById('error');

error.classList.add('invisible');

btn.addEventListener('click', function() {
  error.classList.add('invisible');
  const parsedValued = parseValue(firstNumberEl.value, secondNumberEl.value);
  const [firstNumber, secondNumber]= parsedValued;
  if(checkValidInput(...parsedValued)) {
    switch (action.value) {
      case '+':
        result.innerText = sum(firstNumber, secondNumber);
        break;
      case '*':
        result.innerText = multiply(firstNumber, secondNumber);
        break;
      case '/':
        result.innerText = divide(firstNumber, secondNumber);
        break;
      case '-':
        result.innerText = sub(firstNumber, secondNumber);
        break;
      default:
        result.innerText = sum(firstNumber, secondNumber);
    }
  } else {
    error.classList.remove('invisible');
    error.innerText = handleError([firstNumberEl.value, secondNumberEl.value], parsedValued);
  }


});

function parseValue(...values) {
  // Ho un array di valori
  return values.map(value => parseInt(value));
}

function checkValidInput(...parsedValues) {
  return parsedValues.every(num => typeof num === 'number' && !isNaN(num));
}

/*
strInputs: sono le stringhe immesse
convertedNumbers: sono i potenziali numeri parsati
*/
function handleError(strInputs, convertedNumbers) {
  return strInputs.reduce( (message, str, index) => {
    if(checkValidInput(convertedNumbers[index])) {
      return message + '';
    } else {
      return message + str + ' is not a number! ';
    }
  }, 'Please enter two valid numbers! ');
}

function sum(a, b) {
  return parseInt(a) + parseInt(b);
}

function multiply(a,b ) {
  return a * b;
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

function sub(a, b) {
  return parseInt(a) - parseInt(b);
}

