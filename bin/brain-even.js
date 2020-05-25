#!/usr/bin/env node
import playGame from '../src/index.js';
import generateEvenGameQuestions from '../src/games/even.js';
import { NUMBER_OF_ROUNDS } from '../src/utils/constants.js';

playGame(generateEvenGameQuestions(NUMBER_OF_ROUNDS), 'Answer "yes" if the number is even, otherwise answer "no".');
