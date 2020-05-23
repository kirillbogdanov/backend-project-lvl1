#!/usr/bin/env node
import playGame from '../src/index.js';
import createCalcGameData from '../src/games/calc.js';
import { NUMBER_OF_ROUNDS } from '../src/utils/constants.js';

playGame(createCalcGameData(NUMBER_OF_ROUNDS), 'What is the result of the expression?');
