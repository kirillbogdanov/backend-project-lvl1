import { getRandomNumber } from '../utils/utils.js';

const NUMBER_LOWER_BOUNDARY = 1;
const NUMBER_HIGHER_BOUNDARY = 100;

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return findGCD(b, a % b);
};

const createGCDGameData = (numberOfRounds) => {
  const result = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNum = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);
    const secondNum = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);

    result.push([`${firstNum} ${secondNum}`, findGCD(firstNum, secondNum)]);
  }

  return result;
};

export default createGCDGameData;
