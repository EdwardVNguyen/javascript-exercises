const sumAll = function(a,b) {

  if (!(Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0)) return "ERROR"

  if (a > b) {
    let temp = b
    b = a
    a = temp
  }

  // clever approach by using Guass's method of finding sums
  return ((b - a + 1) / 2) * (b + a) 
};

// Do not edit below this line
module.exports = sumAll;
