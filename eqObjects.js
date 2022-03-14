const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;