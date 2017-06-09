// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Problem
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr;
}

bouncer([7, "ate", "", false, 9]);


// Solution
function bouncer(arr) {
  return arr.filter(function(word){
    if (Boolean(word)){
     return word;
    }
  });
}

bouncer([7, "ate", "", false, 9]);

