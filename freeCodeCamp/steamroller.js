// Flatten a nested array. You must account for varying levels of nesting.

// Solution 
var myArray = [1, [2, 3], 4];
 
steamroller(myArray);
 
function steamroller(array) {     // array = [1, [2, 3], 4];
  var flatArray = [];             // flatArray = [];
 
  flatten(array);                 // array = [1, [2, 3], 4];
 
  function flatten(array) {           // flatten([1, [2, 3], 4]);  See below for what happens in each cycle of the forEach loop.
    array.forEach(function(item) {
      if (!Array.isArray(item)) {
        flatArray.push(item);
      } else {
        flatten(item);
      }
    });
  }
 
  // flatten([1, [2, 3], 4])
    // forEach starts:
      // item = 1
      // NOT AN ARRAY SO: flatArray = [1]; Next cycle:
      // item = [2, 3];
      // IS AN ARRAY SO: flatten([2, 3])
        // inner forEach stars:
          // item = 2
          // NOT AN ARRAY SO: flatArray = [1, 2]; Next cycle:
          // item = 3
          // NOT AN ARRAY SO: flatArray = [1, 2, 3]; inner forEach ends.
      // item 4
      // NOT AN ARRAY SO: flatArray = [1, 2, 3, 4]; forEach ends. Function finishes executing.
 
  return flatArray; // returns flatArray = [1, 2, 3, 4];
  