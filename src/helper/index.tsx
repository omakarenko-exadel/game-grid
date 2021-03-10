const findConnection = (inputArray: number[], player: number): number => {
  const counts = [];

  const countConnected = (rowIndex, colIndex) => {
    if (inputArray[rowIndex][colIndex] === player) {
      inputArray[rowIndex][colIndex] = null;
      return neighborsOf(rowIndex, colIndex).reduce(function (sum, coord) {
        return sum + countConnected(coord[0], coord[1]);
      }, 1);
    }
    return 0;
  };

  const neighborsOf = (i, j) => {
    return [
      [i - 1, j],
      [i + 1, j],
      [i, j - 1],
      [i, j + 1],
    ].filter((coord) => {
      return inputArray[coord[0]] && inputArray[coord[0]][coord[1]];
    });
  };

  inputArray = inputArray.slice().map((row) => {
    return row.slice();
  });

  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray[i].length; j++) {
      if (inputArray[i][j]) {
        counts.push(countConnected(i, j));
      }
    }
  }

  const result = Math.max.apply(null, counts);

  return result >= 0 ? result : 0;
};

export default findConnection;
