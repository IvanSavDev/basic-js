const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const discards = {
    '--discard-next': null,
    '--discard-prev': null,
    '--double-next': null,
    '--double-prev': null,
  }

  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  const copyArr = arr.slice();
  for (let i = 0; i < copyArr.length; i++) {
    const currentElement = copyArr[i];
    if (typeof currentElement !== 'number') {
      if (copyArr[i] === discardNext && (i !== copyArr.length - 1)) {
        copyArr.splice(i + 1, 1);
      }
      if (copyArr[i] === discardPrev && (i !== 0)) {
        copyArr.splice(i - 1, 1);
      }
      if (copyArr[i] === doubleNext && (i !== copyArr.length - 1)) {
        copyArr.splice(i, 1, copyArr[i + 1]);
      }
      if (copyArr[i] === doublePrev && (i !== 0)) {
        copyArr.splice(i, 1, copyArr[i - 1]);
      }
    }

  }
  
  const newAr = copyArr.filter((el) => !discards.hasOwnProperty(el));

  return newAr;
}

module.exports = {
  transform
};
