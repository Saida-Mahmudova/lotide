const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), true);