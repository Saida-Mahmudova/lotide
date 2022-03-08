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

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let elm in source) {
    for (let rem in itemsToRemove) {
      if (source[elm] !== itemsToRemove[rem]) {
        newArr.push(source[elm]);
      }
    }
  }
  return newArr;
};


const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "lighthouse"]);