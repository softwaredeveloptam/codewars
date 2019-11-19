/*

Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
  
    var countO = 0;
    var countX = 0;
    str = str.toLowerCase();
    
    for(var i = 0; i < str.length; i++) {
      if(str.charAt(i) == "o") {
        countO++;
      }
      
      if(str.charAt(i) == "x") {
        countX++;
      }
    }
    
    if (countO == countX) {
      return true;
    }
    
    else {
      return false;
    }
  }