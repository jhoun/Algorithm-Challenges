// Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!

// Brute Force;
function union(arrays) {
    var newArr = [];
    var args = Array.from(arguments);
    for (var i = 0; i < args.length; i++){
      for (var j = 0; j < args[i].length; j++){
        if (newArr.indexOf(args[i][j]) === -1){
          newArr.push(args[i][j]);
        }
      }
    }
    return newArr;
  }

// Functional 
function union(arrays) {
    var newArr = [];
    return Array.from(arguments).reduce(function(a, b){
      return a.concat(b.filter(function(element){
        return a.indexOf(element) === -1;
      }))
    })
  }

union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5])