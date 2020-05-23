import getRandomNumber from '../utils/getRandomNumber.js';

const NUMBER_LOWER_BOUNDARY = 1;
const NUMBER_HIGHER_BOUNDARY = 101;

const findGcd = (a, b) => {
  let [min, max] = [a, b].sort();

  while (min !== 0) {
    const remainder = max % min;

    max = min;
    min = remainder;
  }

  return max;
};

const gcd = (numberOfRounds) => {
  const result = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNum = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);
    const secondNum = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);

    result.push([`${firstNum} ${secondNum}`, findGcd(firstNum, secondNum)]);
  }

  return result;
};

export default gcd;
