const getFalse = () => false;
const isOdd = n => n % 2 !== 0;

const isOddRowTilePassable = (_, colIndex) => isOdd(colIndex);

export const generateInitial = (width, height) => {
  const initialMaze = [];

  for (let i = 0; i < height; i++) {
    const isPassable = i % 2 === 0 ? getFalse : isOddRowTilePassable;
    const row = Array.from({ length: width }, isPassable);
    initialMaze.push(row);
  }

  return initialMaze;
};

const EXIT_POSITION = [ 1, 1 ];
export const getStartPosition = (width, height) => [ width - 2, height - 2];

const getPositionHash = position => position.join();

const offsets = [
  [ -2, 0 ],
  [ 0, -2 ],
  [ 2, 0 ],
  [ 0, 2]
];

const getNeighbors = ([ x0, y0 ], width, height, visited) => {
  const neighborsPositions = [];

  for (const [ dx, dy ] of offsets) {
    const nextX = dx + x0;
    const nextY = dy + y0;

    const nextPosition = [ nextX, nextY ];

    if (
      nextX > 0 && nextY > 0 &&
      nextX < width && nextY < height &&
      !visited.has(getPositionHash(nextPosition))) {
      neighborsPositions.push(nextPosition);
    }
  }

  return neighborsPositions;
};

export const generateMaze = (width, height, nextInt) => {
  const maze = generateInitial(width, height);
  const startPosition = getStartPosition(width, height);

  const queue = [ startPosition ];
  const visited = new Set([ getPositionHash(startPosition) ])

  while (queue.length > 0) {
    const currentPosition = queue.pop();

    const [ currentX, currentY ] = currentPosition;

    const neighborsPositions = getNeighbors(currentPosition, width, height, visited);
    if (neighborsPositions.length > 0) {
      const [ nextX, nextY ] = neighborsPositions[nextInt(neighborsPositions.length)];
      maze[currentY + (nextY - currentY) / 2][currentX + (nextX - currentX) / 2] = true;
      queue.push(currentPosition);
      visited.add(getPositionHash([ nextX, nextY ]));
      queue.push([ nextX, nextY ]);
    }
  }

  return maze;
}