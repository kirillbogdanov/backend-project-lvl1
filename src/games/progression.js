import { startGame, NUMBER_OF_ROUNDS } from '../index.js';
import { getRandomNumber } from '../utils.js';

const FIRST_ITEM_LOWER_BOUNDARY = 1;
const FIRST_ITEM_HIGHER_BOUNDARY = 100;
const STEP_LOWER_BOUNDARY = 1;
const STEP_HIGHER_BOUNDARY = 10;
const PROGRESSION_ITEM_REPLACER = '..';
const GAME_DESCRIPTION = 'What number is missing in the progression?';

const createProgression = (firstItem, step, length = 10) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    const progressionElement = firstItem + i * step;

    result.push(progressionElement);
  }

  return result;
};

const replaceElementInProgression = (progression, index, replacer) => {
  const result = [...progression];

  result[index] = replacer;

  return result;
};

const generateProgressionGameQuestionAndAnswerPairs = (numberOfRounds) => {
  const result = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstItem = getRandomNumber(FIRST_ITEM_LOWER_BOUNDARY, FIRST_ITEM_HIGHER_BOUNDARY);
    const step = getRandomNumber(STEP_LOWER_BOUNDARY, STEP_HIGHER_BOUNDARY);
    const progression = createProgression(firstItem, step);
    const randomIndex = getRandomNumber(0, progression.length - 1);
    const question = replaceElementInProgression(progression, randomIndex, PROGRESSION_ITEM_REPLACER).join(' ');
    const correctAnswer = progression[randomIndex].toString();


    result.push([question, correctAnswer]);
  }

  return result;
};

const startProgressionGame = () => {
  const questionAndAnswerPairs = generateProgressionGameQuestionAndAnswerPairs(NUMBER_OF_ROUNDS);

  startGame(questionAndAnswerPairs, GAME_DESCRIPTION);
};

export default startProgressionGame;
