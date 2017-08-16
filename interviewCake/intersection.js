// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!

// Brute Force
function intersection(arrays){
    var args = Array.from(arguments);
    var newArr = args[0];
    for(var i = 1; i < args.length; i++){
      prevArr = newArr;
      newArr = [];
      for(var j = 0; j < args[i].length; j++){
        if (prevArr.indexOf(args[i][j]) > -1){
          newArr.push(args[i][j]);
        }
      }
    }
    return newArr;
  }
  
  intersection([5, 10, 15, 20, 3], [15, 88, 1, 5, 7, 3], [1, 10,3, 15, 5, 20]);

  // Functional
  function intersection(arrays) {
    return Array.from(arguments).reduce(function(previous, current){
      return previous.filter(function(element){
        return current.indexOf(element) > -1;
      });
    });
  }