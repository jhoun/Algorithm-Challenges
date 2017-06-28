// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// Problem
function convertHTML(str) {

}

convertHTML('Stuff in "quotation marks"');

// Solution
function convertHTML(str) {
  var htmlEnt = {
    '&': '&amp;',
    "<": '&lt;',
    ">": '&gt;',
    "'": '&apos;',
    '"': '&quot;'
  };
 for (var i = 0; i < str.length; i++){
  for (var props in htmlEnt){
    if (str[i] === props){
   str = str.replace(str[i], htmlEnt[props]);
    }
  }
 }
  return str;
}

convertHTML('Stuff in "quotation marks"');