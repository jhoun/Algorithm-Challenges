// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

// Problem
function sumPrimes(num) {
  var prime = [];
}

sumPrimes(10);

// Solution
function sumPrimes(num) {
  var prime = [];
  for (var i = 2; i <= num; i++){
    for (var j = 2; j <= i; j++){
      if(j === i){
        prime.push(i);
      }
      if(i % j === 0){
        break;
      }
    }
  }
  return prime.reduce(function(a, b){
    return a+b;
  });
}

sumPrimes(10);