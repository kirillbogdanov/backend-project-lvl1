import readlineSync from 'readline-sync';

const NUMBER_OF_ROUNDS = 3;

const startGame = (gameQuestions, gameRules) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  for (let i = 0; i < gameQuestions.length; i += 1) {
    const [question, correctAnswer] = gameQuestions[i];

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export { startGame, NUMBER_OF_ROUNDS };
