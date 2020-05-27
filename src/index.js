import readlineSync from 'readline-sync';

const NUMBER_OF_ROUNDS = 3;

const startGame = (gameQuestionAndAnswerPairs, gameDescription) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  for (let i = 0; i < gameQuestionAndAnswerPairs.length; i += 1) {
    const [question, correctAnswer] = gameQuestionAndAnswerPairs[i];

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export { startGame, NUMBER_OF_ROUNDS };
