import getRandomNumber from '../utils/getRandomNumber.js';

const FIRST_ITEM_LOWER_BOUNDARY = 1;
const FIRST_ITEM_HIGHER_BOUNDARY = 101;
const STEP_LOWER_BOUNDARY = 1;
const STEP_HIGHER_BOUNDARY = 11;

const createProgression = (firstItem, step, length = 10) => {
  const result = [];

  for (let i = firstItem; result.length < length; i += step) {
    result.push(i);
  }

  return result;
};

const progression = (numberOfRounds) => {
  const result = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstItem = getRandomNumber(FIRST_ITEM_LOWER_BOUNDARY, FIRST_ITEM_HIGHER_BOUNDARY);
    const step = getRandomNumber(STEP_LOWER_BOUNDARY, STEP_HIGHER_BOUNDARY);
    const prog = createProgression(firstItem, step);
    const randomIndex = getRandomNumber(0, prog.length);
    const correctAnswer = prog[randomIndex];

    prog[randomIndex] = '..';

    result.push([prog.join(' '), correctAnswer]);
  }

  return result;
};

export default progression;
