import readlineSync from 'readline-sync';

const askUserName = () => readlineSync.question('May I have your name? ');

const printGreeting = (name) => {
  console.log(`Hello, ${name}!`);
};

const playEvenGame = () => {
  const isEven = (num) => num % 2 === 0;
  const runGame = () => {
    for (let i = 0; i < 3; i += 1) {
      const randomNumber = Math.floor(Math.random() * 99 + 1);
      const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

      console.log(`Question: ${randomNumber}`);

      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);

        return false;
      }
    }

    return true;
  };
  const userName = askUserName();

  printGreeting(userName);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isGameCompleted = runGame();

  if (isGameCompleted) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export { printGreeting, playEvenGame };
