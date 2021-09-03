let makeSquare = (matrix, rowIndex, columnIndex) => {
  let checkingSquare = [];
   let rowOrder = rowIndex%3;
  let columnOrder = columnIndex%3;
  let rowStart = rowIndex - rowOrder;
  let columnStart = columnIndex - columnOrder;
  for (let i = rowStart; i < (rowStart + 3); i++) {
    for (let j = columnStart; j < (columnStart + 3); j++) {
      checkingSquare.push(matrix[i][j]);
    }
  }
  return checkingSquare;
}


let makeColumn = (matrix, indexElement) => {
  let checkingColumn = [];
  matrix.forEach(row => {
    checkingColumn.push(row[indexElement]);
})
return checkingColumn;
};

let isFinishMatrix = (matrix) => {
  let result = 0;
   matrix.forEach(row => {
      if (row.includes(0)) {
        result ++;
      }
    });
    if (result === 0) {
      return true;
    } else {
      return false;
    }
}

module.exports = function solveSudoku(matrix) {
  if (isFinishMatrix(matrix)) {
    return matrix;
  } else {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        let checkingSquare = makeSquare(matrix, i, j);
        let checkingColumn = makeColumn(matrix, j);
        for (let k = 1; k <= 9; k++) {
          if (!matrix[i].includes(k) && !checkingSquare.includes(k) && !checkingColumn.includes(k)) {
            matrix[i][j] = k;
            if (solveSudoku(matrix)) {
                return matrix;
            } else {
                matrix[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
}
return matrix;
}

