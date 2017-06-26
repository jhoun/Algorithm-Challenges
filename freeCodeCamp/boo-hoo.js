// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// Problem
function booWho(bool) {
  
}

booWho(null);

// Solution
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true || bool === false){
    return true;
  } else {
    return false;
  }
  
}

booWho(null);