import { startGame, NUMBER_OF_ROUNDS } from '../index.js';
import { getRandomNumber } from '../utils.js';

const NUMBER_LOWER_BOUNDARY = 1;
const NUMBER_HIGHER_BOUNDARY = 100;
const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const generatePrimeGameQuestionAndAnswerPairs = (numberOfRounds) => {
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
  const questionAndAnswerPairs = generatePrimeGameQuestionAndAnswerPairs(NUMBER_OF_ROUNDS);

  startGame(questionAndAnswerPairs, GAME_DESCRIPTION);
};

export default startPrimeGame;
