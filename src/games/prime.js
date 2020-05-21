import getRandomNumber from '../utils/getRandomNumber.js';
import { NUMBER_OF_ROUNDS } from '../utils/constants.js';

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }

  const sqrt = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= sqrt; i += 1) {
    const isDividedByTwoOrThree = (i !== 2 && i % 2 === 0) || (i !== 3 && i % 3 === 0);

    // Ускоряем алгоритм, отбрасывая делители, кратные 2 и 3
    if (!isDividedByTwoOrThree && num % i === 0) {
      return false;
    }
  }

  return true;
};

const prime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const result = [rules, []];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const randomNumber = getRandomNumber(1, 101);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    result[1] = [...result[1], [randomNumber, correctAnswer]];
  }

  return result;
};

export default prime;
