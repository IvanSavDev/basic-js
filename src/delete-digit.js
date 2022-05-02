const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n).split('');
  const arrayVariableNumbers = [];
  
  for(let i = 0; i < str.length; i++) {
    const copyStr = str.slice();
    copyStr[i] = null;
    const joinCopyStr = copyStr.join('');
    const strRes = joinCopyStr.split(null).join('');
    arrayVariableNumbers.push(strRes);
  }

  const resultArray = arrayVariableNumbers
    .map((number) => Number(number))
    .sort((a, b) => a - b);

  return resultArray[resultArray.length - 1];
}

module.exports = {
  deleteDigit
};
