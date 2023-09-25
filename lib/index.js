import { getRandomInt } from "./seed-random.js";
import { generateInitial, generateMaze } from "./generate-maze.js";
import { stringifyMaze } from "./utils.js";

const maze = generateMaze(31, 31, getRandomInt);
console.log(stringifyMaze(maze));
