// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

// Problem
function whatIsInAName(collection, source) {

}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });


// Solution
function whatIsInAName(collection, source) {
    //filter through collection array
  var filtered = collection.filter(function(x){
      //loops through object (nested)
    for (var prop in source){
        // if value in collection matches value in source
      if (x[prop] !== source[prop]){
          //filters x out
        return false;
      }
    }
    //returns objects from colletion that are true
    return true;
  });
  return filtered;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
