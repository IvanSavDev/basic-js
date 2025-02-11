const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, count = 1) {
    let arrayDepth = [];
    for(const element of arr) {
      if (Array.isArray(element)) {
        arrayDepth.push(this.calculateDepth(element, count + 1));
      }
    }
    arrayDepth.push(count);
    return Math.max(...arrayDepth);
  }
}

module.exports = {
  DepthCalculator
};
