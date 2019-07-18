import {checkValidInput} from "./lib";

export class ErrorHandler {
  constructor(errorEl, hideCssRule) {
    this.errorEl = {
      element: errorEl,
      hide: hideCssRule
    };
  }
  /*
  strInputs: sono le stringhe immesse
  convertedNumbers: sono i potenziali numeri parsati
  */
  handleError(strInputs, convertedNumbers) {
    this.errorEl.element.innerText = strInputs.reduce( (message, str, index) => {
      if(checkValidInput(convertedNumbers[index])) {
        return message + '';
      } else {
        return message + str + ' is not a number! ';
      }
    }, 'Please enter two valid numbers! ');
    this.showErrors();
  }
  showErrors() {
    this.errorEl.element.classList.remove(this.errorEl.hide);
  }
  hideErrors() {
    this.errorEl.element.classList.add(this.errorEl.hide);
  }
}
