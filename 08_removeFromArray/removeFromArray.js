const removeFromArray = function(arr, ...args) {
  for (const arg of args) {
    arr = arr.filter(num => num !== arg) // I had done != previously, which didn't work because it didn't type check. e.g. "1" and 1 were considered the same
  } 
  return arr
};

// Do not edit below this line
module.exports = removeFromArray;
