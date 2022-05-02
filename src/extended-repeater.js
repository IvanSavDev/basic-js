const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const currentStr = String(str);
  const repeatTimes = options.repeatTimes ?? 0;
  const separator = options.separator ?? '+';
  let addition = options.addition ?? '';
  if (options.addition === null) addition = null;
  const additionRepeatTimes = options.additionRepeatTimes ?? 0;
  const additionSeparator = options.additionSeparator ?? '|';

  let patternAddition = addition;
  for (let i = 1; i < additionRepeatTimes; i++) {
    patternAddition += `${additionSeparator}${addition}`;
  }
  
  let patternSeporator = `${currentStr}${patternAddition}`;
  for(let i = 1; i < repeatTimes; i++) {
    if (addition === '0') {
      patternSeporator += `${separator}${currentStr}`;
    } else {
      patternSeporator += `${separator}${currentStr}${patternAddition}`;
    }
  }

  return patternSeporator;
}

module.exports = {
  repeater
};
