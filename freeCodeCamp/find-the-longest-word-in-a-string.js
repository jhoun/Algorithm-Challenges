// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Problem
function findLongestWord(str) {
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


// Solution
function findLongestWord(str) {
  var longestWord = 0;
  str = str.split(' ');
  for (var i = 0; i < str.length; i++){
    if (str[i].length > longestWord){
      longestWord = str[i].length;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
