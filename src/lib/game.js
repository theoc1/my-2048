export const collapseRow = (inputRow) => {
  const result = inputRow.map(() => 0);
  let counter = result.length - 1;

  const row = inputRow.filter((el) => el !== 0);

  for (let i = row.length - 1; i >= 0; i -= 1) {
    if (row[i] !== row[i - 1]) {
      result[counter] = row[i];
      counter -= 1;
      continue;
    }

    result[counter] = row[i] + row[i - 1];
    counter -= 1;
    i -= 1;
  }
  
  return result;
};

const flipMatrix = (matrix) => matrix[0].map((column, index) => (
  matrix.map((row) => row[index])
));

const rotateMatrix180 = (matrix) => matrix.reverse().map((row) => [...row].reverse());

const calculateRight = (grid) => [...grid].map((row) => collapseRow(row));

const calculateUp = (grid) => {
  // turn 90
  let turned = flipMatrix([...grid].reverse());
  turned = turned.map((row) => collapseRow(row));

  return flipMatrix(turned).reverse();
}

const calculateDown = (grid) => {
  // turn 270
  let turned = flipMatrix([...grid]).reverse();
  turned = turned.map((row) => collapseRow(row));

  return flipMatrix(turned.reverse());
}

const calculateLeft = (grid) => {
  // turn 180
  let turned = rotateMatrix180([...grid]);
  turned = turned.map((row) => collapseRow(row));

  return rotateMatrix180(turned);
}

const addRandomItem = (grid) => {
  const candidates = [];
  for (let i = 0; i < grid.length; i += 1) {
    const row = grid[i];
    for (let j = 0; j < row.length; j += 1) {
      if (row[j] === 0) candidates.push({ i, j });
    }
  }

  if (candidates.length === 0) return 'eog';

  const lucky  = candidates[Math.floor(Math.random() * candidates.length)];
  grid[lucky.i][lucky.j] = 2;

  return grid;
}

export const calculate = (grid, key) => {
  let result;

  if (key === 'ArrowRight') result = calculateRight(grid);
  if (key === 'ArrowUp') result = calculateUp(grid);
  if (key === 'ArrowLeft') result = calculateLeft(grid);
  if (key === 'ArrowDown') result = calculateDown(grid);

  return addRandomItem(result);
}
