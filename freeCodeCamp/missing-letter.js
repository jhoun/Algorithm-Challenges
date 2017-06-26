// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Problem

function fearNotLetter(str) {
  return str;
}

fearNotLetter("bcd");


// Solution

function fearNotLetter(str) {
  var alphabet = "abcdefghijklmnop";
  for (var i = 0; i < alphabet.length; i++){
    if (alphabet[0] !== str[0]){
      return undefined;
    }
    if(alphabet[i] !== str[i]){
      return alphabet[i];
      break;
    }
  }
  return str;
}

fearNotLetter("bcd");
