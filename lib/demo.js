import { createSeedRandom } from "./seed-random.js";
import { generateMaze, getStartPosition } from "./generate-maze.js";
import { stringifyMaze, stringifyWithPath } from "./utils.js";
import { findPath } from "./find-path.js";

const width = 15;
const heigh = 13;

const getRandomInt = createSeedRandom(42);

const maze = generateMaze(width, heigh, getRandomInt);
const [ fromX, fromY ] = getStartPosition(width, heigh);

const path = findPath(fromX, fromY, 1, 1, maze);

document.getElementById('maze').innerHTML = stringifyWithPath(maze, path);
