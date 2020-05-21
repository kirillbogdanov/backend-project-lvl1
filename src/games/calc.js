import getRandomNumber from '../utils/getRandomNumber.js';
import { NUMBER_OF_ROUNDS } from '../utils/constants.js';

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
    const firstOperand = getRandomNumber(1, 101);
    const secondOperand = getRandomNumber(1, 101);
    const operator = OPERATORS[getRandomNumber(0, 3)];
    const expression = `${firstOperand} ${operator} ${secondOperand}`;
    const correctAnswer = calculate(firstOperand, secondOperand, operator);

    result[1] = [...result[1], [expression, correctAnswer]];
  }

  return result;
};

export default calc;
