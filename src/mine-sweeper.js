const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    let currentMatrix = [];
    for (let j = 0; j < 3; j++) {
      let currentCount = 0;
      for (let k = j - 1; k <= j + 1; k++) {
        if (matrix[i - 1]) {
          if (matrix[i - 1][k] === true) {
            currentCount += 1;
          }
        }
        if (matrix[i + 1]) {
          if (matrix[i + 1][k] === true) {
            currentCount += 1;
          }
        }
        if (matrix[i][k] === true && j !== k) {
          currentCount += 1;
        }
      }
      currentMatrix.push(currentCount);
    }
    newMatrix.push(currentMatrix);
  }
  return newMatrix;
}

module.exports = {
  minesweeper
};
