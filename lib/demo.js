import { getRandomInt } from "./seed-random.js";
import { generateMaze } from "./generate-maze.js";
import { stringifyMaze } from "./utils.js";

const maze = generateMaze(33, 31, getRandomInt);
document.getElementById('maze').innerHTML = stringifyMaze(maze);
