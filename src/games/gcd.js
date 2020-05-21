import getRandomNumber from '../utils/getRandomNumber.js';
import { NUMBER_OF_ROUNDS } from '../utils/constants.js';

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

const gcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const result = [rules, []];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const firstNum = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);
    const secondNum = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);

    result[1] = [...result[1], [`${firstNum} ${secondNum}`, findGcd(firstNum, secondNum)]];
  }

  return result;
};

export default gcd;
