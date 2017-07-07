// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

// Return the rest of the array, otherwise return an empty array.

// Problem
function dropElements(arr, func) {

}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})

// Solution
function dropElements(arr, func) {
 for (var i = 0; i < arr.length; i++){
   while(func(arr[i])){
    return arr.slice(i)
   }
 }
 return [];
}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})