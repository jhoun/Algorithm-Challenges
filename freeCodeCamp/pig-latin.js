// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Problem
function translatePigLatin(str) {

  return str;
}

translatePigLatin("glove");

// Solution
function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var firstLetters = "";
  var i = 0;
  if (vowels.indexOf(str.charAt(0)) !== -1){
    str = str + 'way';
  } else {
    while (vowels.indexOf(str[i]) === -1){
      firstLetters += str[i];
      i++;
    }
    str = str.slice(firstLetters.length) + firstLetters + 'ay';
  }
  return str;
}

translatePigLatin("glove");