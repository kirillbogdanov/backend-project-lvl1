import getRandomNumber from '../utils/getRandomNumber.js';

const isEven = (num) => num % 2 === 0;

const even = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [
    'Answer "yes" if the number is even, otherwise answer "no".',
    randomNumber,
    correctAnswer,
  ];
};

export default even;
