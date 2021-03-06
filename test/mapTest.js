const { assertArraysEqual, map } = require('../index');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results1, ['g', 'c', 'a', 'm', 't']);