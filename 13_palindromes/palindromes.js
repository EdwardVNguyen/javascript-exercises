const palindromes = function (string) {
  let left = 0 
  let right = string.length - 1

  while (left < right) {
    // if left is not alphabet, move on
    while (!(string[left].match(/[a-z0-9]/i)))
      left++
    // same with right side
    while (!(string[right].match(/[a-z0-9]/i)))
      right--
    // check if both letters are equivalent to see if it is a palidrome
    if (string[left].toLowerCase() !== string[right].toLowerCase()) 
      return false
    // progress through the string
    left++ 
    right--
  }
  return true
};

// Do not edit below this line
module.exports = palindromes;
