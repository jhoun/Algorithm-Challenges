// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

// Problem
function sumFibs(num) {
 
}

sumFibs(75025);

// Soulution
function sumFibs(num) {
 var curr = 1;
 var prev = 1;
 var next = 0;
 var fib = [1];
 var total = 0;
 while ( next <= num){
   next = curr + prev;
   prev = curr;
   curr = next;
   fib.push(prev);
 }
 for (var i = 0; i < fib.length; i++){
   if ( fib[i] % 2 !== 0){
     total += fib[i];
   }
 }
 return total;
}

sumFibs(75025);