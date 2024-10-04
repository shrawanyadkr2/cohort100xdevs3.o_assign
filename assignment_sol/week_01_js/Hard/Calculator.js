/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
//lets try to get into it

const { evaluate, parse } = require('mathjs');

class Calculator {
  constructor() {
    this.result = 0; // Initialize the result variable to 0
  }

  add(number) {
    this.result += number; // Add number to result
  }

  subtract(number) {
    this.result -= number; // Subtract number from result
  }

  multiply(number) {
    this.result *= number; // Multiply result by number
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero"); // Prevent division by zero
    }
    this.result /= number; // Divide result by number
  }

  clear() {
    this.result = 0; // Reset result to 0
  }

  getResult() {
    return this.result; // Return the current result
  }

  calculate(expression) {
    expression = expression.replace(/\s+/g, ""); // Remove extra spaces

    // Check for invalid characters in the expression
    if (!/^[\d+\-*/().]+$/.test(expression)) {
      throw new Error("Invalid characters in expression"); // Throw error for invalid characters
    }

    // Check for division by zero in the expression
    if (expression.includes('/0')) {
      throw new Error("Cannot divide by zero"); // Throw error for division by zero
    }

    try {
      this.result = evaluate(expression); // Safely evaluate the expression
    } catch (error) {
      throw new Error("Invalid expression"); // Throw error if evaluation fails
    }

    return this.result; // Return the evaluated result
  }
}

module.exports = Calculator;

// Example Usage
const calc = new Calculator();
console.log(calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7")); // Evaluate the expression and print the result

