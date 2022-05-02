const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultStr = '';

  let currentStr = '';

  for(let i = 0; i < str.length; i++) {
    currentStr += str[i];

    if (str[i] !== str[i + 1]) {
      if (currentStr.length === 1) {
        resultStr += `${str[i]}`;
      } else {
        resultStr += `${currentStr.length}${str[i]}`;
      }
      currentStr = '';
    }
  }

  return resultStr;
}

module.exports = {
  encodeLine
};
