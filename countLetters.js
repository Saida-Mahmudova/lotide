const countLetters = function(sentence) {
  let obj = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (obj[letter]) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    }
  }
  return obj;
};

module.exports = countLetters;