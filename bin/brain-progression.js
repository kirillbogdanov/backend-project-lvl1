#!/usr/bin/env node
import playGame from '../src/index.js';
import createProgressionGameData from '../src/games/progression.js';
import { NUMBER_OF_ROUNDS } from '../src/utils/constants.js';

playGame(createProgressionGameData(NUMBER_OF_ROUNDS), 'What number is missing in the progression?');
