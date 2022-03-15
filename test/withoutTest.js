const { assertArraysEqual, without } = require('../index');

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "lighthouse"]);