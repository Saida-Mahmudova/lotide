const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let newArr = [];
  let index = array.length / 2;
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    newArr.push(array[index - 1], array[index]);
  } else if (array.length % 2 !== 0) {
    index = Math.ceil(array.length / 2);
    newArr = [index];
  }
  return newArr;
};

module.exports = middle;