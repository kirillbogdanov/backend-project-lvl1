import startGame from '../index.js';
import { getRandomNumber } from '../utils/utils.js';
import { NUMBER_OF_ROUNDS } from '../utils/constants.js';

const NUMBER_LOWER_BOUNDARY = 1;
const NUMBER_HIGHER_BOUNDARY = 100;
const GAME_RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const sqrt = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generatePrimeGameQuestions = (numberOfRounds) => {
  const result = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomNumber = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);
    const question = randomNumber;
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    result.push([question, correctAnswer]);
  }

  return result;
};

const startPrimeGame = () => {
  const gameQuestions = generatePrimeGameQuestions(NUMBER_OF_ROUNDS);

  startGame(gameQuestions, GAME_RULES);
};

export default startPrimeGame;
