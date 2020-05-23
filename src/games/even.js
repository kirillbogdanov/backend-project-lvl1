import { getRandomNumber } from '../utils/utils.js';

const NUMBER_LOWER_BOUNDARY = 1;
const NUMBER_HIGHER_BOUNDARY = 100;

const isEven = (num) => num % 2 === 0;

const createEvenGameData = (numberOfRounds) => {
  const result = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomNumber = getRandomNumber(NUMBER_LOWER_BOUNDARY, NUMBER_HIGHER_BOUNDARY);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    result.push([randomNumber, correctAnswer]);
  }

  return result;
};

export default createEvenGameData;
