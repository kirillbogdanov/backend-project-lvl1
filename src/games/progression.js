import getRandomNumber from '../utils/getRandomNumber.js';

const getProgression = (firstItem, step, length = 10) => {
  const result = [];

  for (let i = firstItem; result.length < length; i += step) {
    result.push(i);
  }

  return result;
};

const progression = () => {
  const firstItem = getRandomNumber(1, 101);
  const step = getRandomNumber(1, 11);
  const prog = getProgression(firstItem, step);
  const randomIndex = getRandomNumber(0, prog.length);
  const correctAnswer = prog[randomIndex];

  prog[randomIndex] = '..';

  return [
    'What number is missing in the progression?',
    prog.join(' '),
    correctAnswer,
  ];
};

export default progression;
