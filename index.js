const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const without = require('./without');
const map = require('./map');
const takeUntil = require('./takeUntil');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions')

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  eqObjects,
  assertObjectsEqual,
  without,
  map,
  takeUntil,
  countLetters,
  countOnly,
  findKeyByValue,
  letterPositions
};