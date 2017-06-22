// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// Problem

function pairElement(str) {
 
}

pairElement("GCG");


// Solution

function pairElement(str) {
  var newArr = [];
  var pair = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C",
  };
  
  str = str.split('');
  
  for (var i = 0; i < str.length; i++){
    for (var prop in pair){
      if (str[i] === prop) {
        newArr.push([prop, pair[prop]]);
      }
    }
  }
  return newArr;
}

pairElement("GCG");
