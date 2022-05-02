const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
//  const chainMaker = {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const chainMaker = {
  head: [],

  getLength() {
    return this.head.length;
  },

  addLink(data = '') {
    this.head.push(`( ${data} )`);
    return this;
  },

  removeLink(position) {
    let index = position - 1;
    if (index < 0 || index >= this.head.length) {
      this.head = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    if (!(typeof position === 'number') || !Number.isInteger(position)) {
      this.head = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.head.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.head = this.head.reverse();

    return this;
  },

  finishChain() {
    const currentChain = this.head.join('~~');
    this.head = [];
    return currentChain;
  },
};

module.exports = {
  chainMaker
};
