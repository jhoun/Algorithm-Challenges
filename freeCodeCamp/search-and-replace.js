// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

// Problem

function myReplace(str, before, after) {
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

// Solution

function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()){
    str = str.replace(before, after[0].toUpperCase() + after.slice(1));
  } else {
    str = str.replace(before, after);
  }
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");