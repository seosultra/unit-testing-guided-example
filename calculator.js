function sum(a, b) {
  if (a === undefined && b === undefined) {
    //(!a && !b) {
    return 0;
  } else if (a === undefined) {
    return b + 0;
  } else if (b === undefined) {
    return a + 0;
  } else {
    return a + b;
  }
}

function subtract(a, b) {
  if (a === undefined && b === undefined) {
    //(!a && !b) {
    return 0;
  } else if (a === undefined) {
    return b - 0;
  } else if (b === undefined) {
    return a - 0;
  } else {
    return a - b;
  }
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by 0');
  } else {
    return a / b;
  }
}

function multiply(a, b) {
  if (a === 0) {
    return 0;
  } else if (b === 0) {
    return 0;
  } else {
    return a * b;
  }
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
