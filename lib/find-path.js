const getPositionHash = position => position.join();

const offsets = [
  [ -1, 0 ],
  [ 0, -1 ],
  [ 1, 0 ],
  [ 0, 1 ]
];

const backtrace = node => {
  const path = [];

  do {
    path.unshift(node.position);
    node = node.from;
  } while (node);

  return path;
};

const inRange = (value, min, max) => value >= min && value < max;

const isOnMap = (x, y, width, heigh) => inRange(x, 0, width) && inRange(y, 0, heigh);

export const findPath = (fromX, fromY, toX, toY, map) => {

  const width = map[0].length;
  const heigh = map.length;

  const startPosition = [ fromX, fromY ];
  const queue = [ { position: startPosition, from: null } ];
  const visited = new Set([ getPositionHash(startPosition) ]);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const [ currentX, currentY ] = currentNode.position;

    if (currentX === toX && currentY === toY) {
      return backtrace(currentNode);
    }

    for (const [ dx, dy ] of offsets) {
      const nextX = currentX + dx;
      const nextY = currentY + dy;

      const nextPosition = [ nextX, nextY ];

      const key = getPositionHash(nextPosition);

      if (map[nextY][nextX] && isOnMap(nextX, nextY, width, heigh) && !visited.has(key)) {
        queue.push({
          from: currentNode,
          position: nextPosition
        });
        visited.add(key);
      }
    }

  }

  return [];
} 