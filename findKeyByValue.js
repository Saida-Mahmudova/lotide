const findKeyByValue = function (object, string) {
  let key = Object.keys(object)
  for (let value of key) {
    if (object[value] === string) {
      return value;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;