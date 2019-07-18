import {parseValue, sum, sub, multiply, divide, checkValidInput } from "./lib";
import { ErrorHandler } from "./errorHandler";

const firstNumberEl = document.getElementById('firstNumber');
const secondNumberEl = document.getElementById('secondNumber');
const btn = document.getElementById('doit');
const action = document.getElementById('inputGroupAction');
const result = document.getElementById('result');
const error = document.getElementById('error');

const errorHandler = new ErrorHandler(error, 'invisible');
errorHandler.hideErrors();

btn.addEventListener('click', function() {
  errorHandler.hideErrors();
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
    errorHandler.handleError([firstNumberEl.value, secondNumberEl.value], parsedValued);
    errorHandler.showErrors();
    // error.classList.remove('invisible');
    // error.innerText = handleError([firstNumberEl.value, secondNumberEl.value], parsedValued);
  }
});


