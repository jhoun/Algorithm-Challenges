// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// Problem
function convertToRoman(num) {
 return num;
}

convertToRoman(36);


// Solution
function convertToRoman(num) {
  // Create an empty string for the result  
  var result = "";
  // list all relevant numbers and numerals
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  for ( var i = 0; i < numbers.length; i++){
    while(num >= numbers[i]){
      result = result + roman[i];
      num = num - numbers[i];
    }
  }
  return result;
}

convertToRoman(74); // LXXIV