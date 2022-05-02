const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = '') {
  if (date === '') return 'Unable to determine the time of year!';
  // if (!Object.prototype.toString.call(date) === '[object Date]') throw new Error('Invalid date!');
  try {
    const currentMonth = date.getMonth();
    date.getTime();
    if (currentMonth < 2 || currentMonth === 11) return 'winter';
    if (currentMonth >= 2 && currentMonth < 5) return 'spring';
    if (currentMonth >= 5 && currentMonth < 8) return 'summer';
    if (currentMonth >= 8 && currentMonth < 11) return 'autumn';
  } catch(e) {
    throw new Error ('Invalid date!')
  }
}

module.exports = {
  getSeason
};
