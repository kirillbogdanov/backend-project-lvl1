import readlineSync from 'readline-sync';
import { even, calc } from './games/index.js';

const playGame = (gameName) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  let getGameData;

  switch (gameName) {
    case 'even':
      getGameData = even;
      break;
    case 'calc':
      getGameData = calc;
      break;
    default:
      return;
  }

  const gameRules = getGameData()[0];
  let isGameCompleted = true;

  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const [, question, correctAnswer] = getGameData();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      isGameCompleted = false;
      break;
    }
  }

  if (isGameCompleted) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default playGame;
