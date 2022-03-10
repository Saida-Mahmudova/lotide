const eqArrays = function(first, second) {
  for (let i in first) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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






assertArraysEqual(middle([1, 2, 3, 4]), [2, 4]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), [3]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []