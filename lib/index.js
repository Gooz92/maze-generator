import { getRandomInt } from "./seed-random.js";
import { generateMaze } from "./generate-maze.js";
import { stringifyWithPath } from "./utils.js";
import { findPath } from "./find-path.js";

const maze = generateMaze(31, 31, getRandomInt);
const path = findPath(29, 29, 1, 1, maze);
console.log(stringifyWithPath(maze, path));


console.log(findPath(29, 29, 1, 1, maze));
