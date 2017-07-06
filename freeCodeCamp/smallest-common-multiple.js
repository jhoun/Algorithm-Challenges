// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

// Problem
function smallestCommons(arr) {
  var array = [];
  for (var i = arr[0]; i <= arr[arr.length -1]; i++){
    array.push(i);
  }
  
  var x = true;
  var LCM = 0;
  while(x){
    LCM++;
    for (var j = array[0]; j <= array[array.length - 1]; j++){
      if (LCM % j !== 0) {
        break;
      }
      else if(j === array[array.length-1]){
        x = false
      }
    }
  }
  return LCM;
}


//Solution
function smallestCommons(arr) {
  var array = [];
  for (var i = arr[0]; i <= arr[arr.length -1]; i++){
    array.push(i);
  }
  
  var x = true;
  var LCM = 0;
  while(x){
    LCM++;
    for (var j = array[0]; j <= array[array.length - 1]; j++){
      if (LCM % j !== 0) {
        break;
      }
      else if(j === array[array.length-1]){
        x = false
      }
    }
  }
  return LCM;
}


smallestCommons([1,5]);
