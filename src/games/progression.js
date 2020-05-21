import getRandomNumber from '../utils/getRandomNumber.js';
import { NUMBER_OF_ROUNDS } from '../utils/constants.js';

const getProgression = (firstItem, step, length = 10) => {
  const result = [];

  for (let i = firstItem; result.length < length; i += step) {
    result.push(i);
  }

  return result;
};

const progression = () => {
  const rules = 'What number is missing in the progression?';
  const result = [rules, []];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const firstItem = getRandomNumber(1, 101);
    const step = getRandomNumber(1, 11);
    const prog = getProgression(firstItem, step);
    const randomIndex = getRandomNumber(0, prog.length);
    const correctAnswer = prog[randomIndex];

    prog[randomIndex] = '..';

    result[1] = [...result[1], [prog.join(' '), correctAnswer]];
  }

  return result;
};

export default progression;
