import getRandomNumber from '../utils/getRandomNumber.js';

const NUMBER_LOWER_BOUNDARY = 1;
const NUMBER_HIGHER_BOUNDARY = 101;

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

const prime = (numberOfRounds) => {
  const result = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomNumber = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    result.push([randomNumber, correctAnswer]);
  }

  return result;
};

export default prime;
