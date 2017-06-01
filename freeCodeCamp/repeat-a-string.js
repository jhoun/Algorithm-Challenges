// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

// Problem
function repeatStringNumTimes(str, num) {
  // repeat after me
  return str;
}

repeatStringNumTimes("abc", 3);


// Solution 
function repeatStringNumTimes(str, num) {
  var newStr = "";
  if (num <= -1) {
    return newStr;
  } else {
    for (var i = 0; i < num; i++) {
      newStr += str;
    }
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
