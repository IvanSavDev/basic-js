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
  head: null,
  length: 0,

  getLength() {
    return this.length;
  },

  addLink(value = '') {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = new Node(value);
    }

    this.length += 1;
    return this;
  },

  removeLink(position) {
    if (position <= 0 || position >= this.length) {
      throw new Error('You can\'t remove incorrect link!');
    }

    if (!(typeof position === 'number') || !Number.isInteger(position))  {
      throw new Error('You can\'t remove incorrect link!');
    }

    let currentNode = this.head;
    let prev = null;
    let index = 1;

    while(index < position) {
      prev = currentNode;
      currentNode = currentNode.next;
      index += 1;
    }

    prev.next = currentNode.next;
    this.length -= 1;
    return this;
  },

  reverseChain() {
    let currentNode = this.head;
    const allValue = [];
    
    while(currentNode) {
      allValue.push(currentNode.value);
      currentNode = currentNode.next;
    }

    const reverseValue = allValue.reverse();
    let countElements = reverseValue.length;
    let index = 0;
    this.head = null;
    this.length = 0;
    // let newCurrentNode = this.head;

    while(countElements > 0) {
      this.addLink(reverseValue[index]);
      index += 1;
      countElements -= 1;
      // if (!this.head) {
      //   this.head = new Node(reverseValue[index]);
      // } else {
      //   newCurrentNode = this.head;
      //   newCurrentNode.next = new Node(reverseValue[index]);
      //   newCurrentNode = newCurrentNode.next;
      //   console.log(this.head)
      // }

      // index += 1;
      // countElements -= 1;
    }

    return this;
  },

  finishChain() {
    let currentNode = this.head;
    let resultString = '';
    while(currentNode) {
      if (currentNode.next) {
        resultString += `( ${currentNode.value} )~~`;
      } else {
        resultString += `( ${currentNode.value} )`;
      }
      currentNode = currentNode.next;
    }

    return resultString;
  },
};

module.exports = {
  chainMaker
};
