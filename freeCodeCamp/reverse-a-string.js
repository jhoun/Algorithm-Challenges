// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

// Problem
function reverseString(str) {
  return str;
}

reverseString("hello");


// Solution
function reverseString(str) {
  var splitStr = str.split("").reverse().join('');
  return splitStr;
}

reverseString("hello");


