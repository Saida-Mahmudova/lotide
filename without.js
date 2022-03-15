const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let elm in source) {
    for (let rem in itemsToRemove) {
      if (source[elm] !== itemsToRemove[rem]) {
        newArr.push(source[elm]);
      }
    }
  }
  return newArr;
};

module.exports = without;