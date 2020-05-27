import { startGame, NUMBER_OF_ROUNDS } from '../index.js';
import { getRandomNumber } from '../utils.js';

const NUMBER_LOWER_BOUNDARY = 1;
const NUMBER_HIGHER_BOUNDARY = 100;
const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateEvenGameQuestionAndAnswerPairs = (numberOfRounds) => {
  const result = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomNumber = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);
    const question = randomNumber;
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    result.push([question, correctAnswer]);
  }

  return result;
};

const startEvenGame = () => {
  const questionAndAnswerPairs = generateEvenGameQuestionAndAnswerPairs(NUMBER_OF_ROUNDS);

  startGame(questionAndAnswerPairs, GAME_DESCRIPTION);
};

export default startEvenGame;
