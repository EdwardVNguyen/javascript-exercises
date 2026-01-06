const leapYears = function(year) {

  // yay propositional logic, goes back to discrete math
  if ( (year % 4 === 0) && (!(year % 100 === 0) || (year % 400 === 0)) )
    return true
  else 
    return false
};

// Do not edit below this line
module.exports = leapYears;
