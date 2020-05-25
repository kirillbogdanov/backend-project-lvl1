import { startGame, NUMBER_OF_ROUNDS } from '../index.js';
import { getRandomNumber } from '../utils/utils.js';

const NUMBER_LOWER_BOUNDARY = 1;
const NUMBER_HIGHER_BOUNDARY = 100;
const GAME_RULES = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return findGCD(b, a % b);
};

const generateGCDGameQuestions = (numberOfRounds) => {
  const result = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNum = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);
    const secondNum = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);
    const question = `${firstNum} ${secondNum}`;
    const correctAnswer = findGCD(firstNum, secondNum).toString();

    result.push([question, correctAnswer]);
  }

  return result;
};

const startGCDGame = () => {
  const gameQuestions = generateGCDGameQuestions(NUMBER_OF_ROUNDS);

  startGame(gameQuestions, GAME_RULES);
};

export default startGCDGame;
