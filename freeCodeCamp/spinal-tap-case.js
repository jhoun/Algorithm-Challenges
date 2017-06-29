// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Problem
function spinalCase(str) {
}

spinalCase('thisIsSpinalTap');

// Solution
function spinalCase(str) {
 var re = str.replace(/([a-z])([A-Z])/g, '$1 $2');
 return re.replace(/\s|_/g, "-").toLowerCase();
}

spinalCase('thisIsSpinalTap');