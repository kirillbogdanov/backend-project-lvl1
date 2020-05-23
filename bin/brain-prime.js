#!/usr/bin/env node
import playGame from '../src/index.js';
import prime from '../src/games/prime.js';
import { NUMBER_OF_ROUNDS } from '../src/utils/constants.js';

playGame(prime(NUMBER_OF_ROUNDS), 'Answer "yes" if given number is prime. Otherwise answer "no".');
