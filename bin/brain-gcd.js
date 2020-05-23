#!/usr/bin/env node
import playGame from '../src/index.js';
import createGCDGameData from '../src/games/GCD.js';
import { NUMBER_OF_ROUNDS } from '../src/utils/constants.js';

playGame(createGCDGameData(NUMBER_OF_ROUNDS), 'Find the greatest common divisor of given numbers.');
