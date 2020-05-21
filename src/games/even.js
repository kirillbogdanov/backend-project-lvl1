import getRandomNumber from '../utils/getRandomNumber.js';
import { NUMBER_OF_ROUNDS } from '../utils/constants.js';

const isEven = (num) => num % 2 === 0;

const even = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const result = [rules, []];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const randomNumber = getRandomNumber(1, 101);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    result[1] = [...result[1], [randomNumber, correctAnswer]];
  }

  return result;
};

export default even;
