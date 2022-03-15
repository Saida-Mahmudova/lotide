const { eqObjects, assertObjectsEqual } = require('../index');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(eqObjects(ab, abc), false);
assertObjectsEqual(eqObjects(ab, ba), false);