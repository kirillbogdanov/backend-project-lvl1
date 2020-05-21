import getRandomNumber from '../utils/getRandomNumber.js';
import { NUMBER_OF_ROUNDS } from '../utils/constants.js';

const NUMBER_LOWER_BOUNDARY = 1;
const NUMBER_HIGHER_BOUNDARY = 101;
const OPERATORS = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const calc = () => {
  const rules = 'What is the result of the expression?';
  const result = [rules, []];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const firstOperand = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);
    const secondOperand = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);
    const operator = OPERATORS[getRandomNumber(0, OPERATORS.length)];
    const expression = `${firstOperand} ${operator} ${secondOperand}`;
    const correctAnswer = calculate(firstOperand, secondOperand, operator);

    result[1] = [...result[1], [expression, correctAnswer]];
  }

  return result;
};

export default calc;
