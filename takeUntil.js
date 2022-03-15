const takeUntil = function(array, callback) {
  let newArr = [];
  for (let i of array) {
    if (callback(i)) {
      return newArr;
    }
    newArr.push(i);
  }
  return newArr;
};

module.exports = takeUntil;