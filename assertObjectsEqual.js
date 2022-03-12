const eqArrays = function(first, second) {
  for (let i in first) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) {
    return false;
  } for (let value of key1) {
    if ((Array.isArray(object1[value])) !== (Array.isArray(object2[value]))) {
      return false;
    } else if (!eqArrays(object1[value], object2[value])) {
      return false;
    } else if (object1[value] !== object2[value]) {
      return false;
    }
  } return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(inspect(actual), inspect(expected))) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(eqObjects(ab, abc), false);
assertObjectsEqual(eqObjects(ab, ba), false);