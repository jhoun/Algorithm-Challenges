// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// Problem
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

// Solution
function titleCase(str) {
  var newStr = [];
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++){
    var firstLetter = str[i].charAt(0).toUpperCase();
    var lastLetters = str[i].slice(1);
    newStr.push(firstLetter.concat(lastLetters));
  }
  return newStr.join(" ");
}
titleCase("I'm a little tea pot");
