export const stringifyMaze = maze =>
  maze.map(row => row.map(cell => cell ? ' ' : '#').join(' ')).join('\n');

const SEED_LENGTH = 8;

const SEED_PATTERN = new RegExp(`^[0-f]{${SEED_LENGTH}}$`, 'i');

const isSeedValid = rawSeed => SEED_PATTERN.test(rawSeed);

export const parseSeed = rawSeed => isSeedValid(rawSeed) ? parseInt(rawSeed, 16) : null;
