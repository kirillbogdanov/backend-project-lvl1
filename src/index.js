import readlineSync from 'readline-sync';

const printEndGameMessage = (isGameCompleted, userName) => {
  const message = isGameCompleted ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`;

  console.log(message);
};

const playGame = (questions, gameRules) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  let isGameCompleted = true;

  console.log(gameRules);

  for (let i = 0; i < questions.length; i += 1) {
    const [question, correctAnswer] = questions[i];

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      isGameCompleted = false;
      break;
    }
  }

  printEndGameMessage(isGameCompleted, userName);
};

export default playGame;
