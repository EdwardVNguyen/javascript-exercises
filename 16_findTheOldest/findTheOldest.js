const findTheOldest = function (array) {

  // create an array of objects with keys being age and values being person objects
  const peopleObj = array.reduce( (obj, person) => {
    if (!person.yearOfDeath) {
      const currentDate = new Date().getFullYear()
      obj[currentDate - person.yearOfBirth] = person
    } else {
      obj[person.yearOfDeath - person.yearOfBirth] = person
    }
    return obj
  }, {} )

  // largestKey is calculated by converting the object to an array of keys, then converting those string keys to numbers, afterwards we use a 
  // spread operator to give a list of parameters for our Math.max function which will find our largest key number 
  const largestKey = Math.max(...Object.keys(peopleObj).map(Number)) 

  return peopleObj[largestKey]
};

// Do not edit below this line
module.exports = findTheOldest;
