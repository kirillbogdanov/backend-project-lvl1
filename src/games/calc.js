import getRandomNumber from '../utils/getRandomNumber.js';

const calc = () => {
  const operations = ['+', '-', '*'];
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);
  const operation = operations[getRandomNumber(0, 3)];
  const expression = `${firstOperand} ${operation} ${secondOperand}`;
  let correctAnswer;

  switch (operation) {
    case '+':
      correctAnswer = firstOperand + secondOperand;
      break;
    case '-':
      correctAnswer = firstOperand - secondOperand;
      break;
    case '*':
      correctAnswer = firstOperand * secondOperand;
      break;
    default:
  }

  return [
    'What is the result of the expression?',
    expression,
    correctAnswer.toString(),
  ];
};

export default calc;
