#!/usr/bin/env node
import playGame from '../src/index.js';
import generateGCDGameQuestions from '../src/games/GCD.js';
import { NUMBER_OF_ROUNDS } from '../src/utils/constants.js';

playGame(generateGCDGameQuestions(NUMBER_OF_ROUNDS), 'Find the greatest common divisor of given numbers.');
