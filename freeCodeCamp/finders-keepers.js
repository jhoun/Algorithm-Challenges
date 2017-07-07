// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

// Problem
function findElement(arr, func) {

}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });

// Solution
function findElement(arr, func) {
  var finder = arr.filter(func);
  return finder[0];
}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });