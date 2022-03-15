# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @saidamah/lotide`

**Require it:**

`const _ = require('@saidamah/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head` : returns head of array
* `tail` : returns tail of array
* `middle` : returns middle of array
*  `eqArrays` : compares arrays
*  `assertEqual` : asserts equal results
*  `assertArraysEqual` : asserts equal arrays
*  `eqObjects` : compares objects
*  `assertObjectsEqual` : asserts equal objects
*  `without`: removes elements from array
*  `map` : iterates through array 
*  `takeUntil`: returns part of array
*  `countLetters`: counts letters of the string
*  `countOnly`: counts only given existing values
*  `findKeyByValue` : finds key by value
*  `letterPositions` : returns letter's position
