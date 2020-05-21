import getRandomNumber from '../utils/getRandomNumber.js';

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
  const firstNum = getRandomNumber(1, 101);
  const secondNum = getRandomNumber(1, 101);

  return [
    'Find the greatest common divisor of given numbers.',
    `${firstNum} ${secondNum}`,
    findGcd(firstNum, secondNum),
  ];
};

export default gcd;
