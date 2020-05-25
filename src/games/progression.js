import { startGame, NUMBER_OF_ROUNDS } from '../index.js';
import { getRandomNumber } from '../utils/utils.js';

const FIRST_ITEM_LOWER_BOUNDARY = 1;
const FIRST_ITEM_HIGHER_BOUNDARY = 100;
const STEP_LOWER_BOUNDARY = 1;
const STEP_HIGHER_BOUNDARY = 10;
const PROGRESSION_ITEM_REPLACER = '..';
const GAME_RULES = 'What number is missing in the progression?';

const createProgression = (firstItem, step, length = 10) => {
  const result = [];

  for (let i = firstItem; result.length < length; i += step) {
    result.push(i);
  }

  return result;
};

const replaceElementInProgression = (progression, index, replacer) => {
  const result = [...progression];

  result[index] = replacer;

  return result;
};

const generateProgressionGameQuestions = (numberOfRounds) => {
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
  const gameQuestions = generateProgressionGameQuestions(NUMBER_OF_ROUNDS);

  startGame(gameQuestions, GAME_RULES);
};

export default startProgressionGame;
