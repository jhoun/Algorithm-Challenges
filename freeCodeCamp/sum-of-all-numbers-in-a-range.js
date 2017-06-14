// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

// Problem
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);


// Solution
function sumAll(arr) {
  var index1 = arr[0];
  var index2 = arr[1];
  var largestNum = Math.max(index1, index2);
  var smallestNum = Math.min(index1, index2);
  var total = 0; 
  for (var i = smallestNum; i <=largestNum; i++){
    total += i;
  }
  return total;
}

sumAll([1, 4]);
