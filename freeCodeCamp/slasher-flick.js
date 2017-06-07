// Return the remaining elements of an array after chopping off n elements from the head.

// The head means the beginning of the array, or the zeroth index.

// Problem

function slasher(arr, howMany) {
  return arr;
}

slasher([1, 2, 3], 2);


// Solution

function slasher(arr, howMany) {
  var removed = arr.slice(howMany);
  return removed;
}

slasher([1, 2, 3], 2);