
export function parseValue(...values) {
  // Ho un array di valori
  return values.map(value => parseInt(value));
}

export function checkValidInput(...parsedValues) {
  return parsedValues.every(num => typeof num === 'number' && !isNaN(num));
}

export function sum(a, b) {
  return parseInt(a) + parseInt(b);
}

export function multiply(a,b ) {
  return a * b;
}

export function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

export function sub(a, b) {
  return parseInt(a) - parseInt(b);
}
