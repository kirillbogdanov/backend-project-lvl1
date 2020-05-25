import { getRandomNumber } from '../utils/utils.js';

const NUMBER_LOWER_BOUNDARY = 1;
const NUMBER_HIGHER_BOUNDARY = 100;
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

const generateCalcGameQuestions = (numberOfRounds) => {
  const result = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstOperand = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);
    const secondOperand = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);
    const operator = OPERATORS[getRandomNumber(0, OPERATORS.length - 1)];
    const expression = `${firstOperand} ${operator} ${secondOperand}`;
    const correctAnswer = calculate(firstOperand, secondOperand, operator);

    result.push([expression, correctAnswer]);
  }

  return result;
};

export default generateCalcGameQuestions;
