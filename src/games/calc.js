import startGame from '../index.js';
import { getRandomNumber } from '../utils/utils.js';
import { NUMBER_OF_ROUNDS } from '../utils/constants.js';

const NUMBER_LOWER_BOUNDARY = 1;
const NUMBER_HIGHER_BOUNDARY = 100;
const OPERATORS = ['+', '-', '*'];
const GAME_RULES = 'What is the result of the expression?';

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
    const question = `${firstOperand} ${operator} ${secondOperand}`;
    const correctAnswer = calculate(firstOperand, secondOperand, operator).toString();

    result.push([question, correctAnswer]);
  }

  return result;
};

const startCalcGame = () => {
  const gameQuestions = generateCalcGameQuestions(NUMBER_OF_ROUNDS);

  startGame(gameQuestions, GAME_RULES);
};

export default startCalcGame;
