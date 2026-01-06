const convertToCelsius = function(celsius) {
  return Math.round((celsius - 32) * (5/9) * 10) / 10
};

const convertToFahrenheit = function(fahrenheit) {
  return Math.round((fahrenheit * (9/5) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
