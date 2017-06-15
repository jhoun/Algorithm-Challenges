// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Problem
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// Solution
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
 function check(word){
    if (arr1.indexOf(word) === -1){
      return word;
    }
    if (arr2.indexOf(word) === -1){
      return word;
    }
  }
  return newArr.filter(check);
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);