// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// Problem

function chunkArrayInGroups(arr, size) {
  // Break it up.
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


// Solution

function chunkArrayInGroups(arr, size) {
 var newArr = [];
 for (var i = 0; i < arr.length; i += size) {
   newArr.push(arr.slice(i, i + size));
 }
 return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);