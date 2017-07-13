// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// Remember, you can access object properties through either dot notation or [] notation.

// Problem

function truthCheck(collection, pre) {
}

truthCheck([{"single": "yes"}], "single")

// My Solution

function truthCheck(collection, pre) {
  for (var i = 0; i < collection.length; i++){
    if (collection[i].hasOwnProperty(pre)) {
      for (var prop in collection[i]){
        if (prop === pre){
          if (collection[i][prop] === null ||
              collection[i][prop] === 0 ||
              collection[i][prop] === "" ||
              collection[i][prop] === undefined){
            return false;
          }
          if (isNaN(collection[i][prop]) && prop === "single" && typeof collection[i][prop] !== 'string'){
            return false;
          }
        }
      }
    } else {
      return false;
    }
  }
  return true;
}

truthCheck([{"single": "yes"}], "single")

// Better Solution

function truthCheck(collection, pre) {
  var arr = [];
  for (var i = 0; i < collection.length; i++){
    if(!collection[i][pre]){
      arr.push(collection[i]);
    }
  }
  if (arr.length === 0){
    return true;
  } else {
    return false;
  }
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
