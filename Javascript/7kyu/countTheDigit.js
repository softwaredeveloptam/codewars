/*

Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. 
Square all numbers k (0 <= k <= n) between 0 and n. 
Count the numbers of digits d used in the writing of all the k**2. 
Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

Examples:

n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1):
the numbers of interest are
1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
so there are 11 digits `1` for the squares of numbers between 0 and 25.

Note that 121 has twice the digit 1.

*/

function nbDig(n, d) {
    
    var arrayNumbers = [];
    
    for(var i = 0; i <= n; i++) {
        let square = i * i;
        arrayNumbers.push(square.toString());
    }
    
    var digitCheck = d.toString();
    var digitCount = 0;
    
    for(var x = 0; x < arrayNumbers.length; x++) {
      for(var y = 0; y < arrayNumbers[x].length; y++) {
        if (digitCheck == arrayNumbers[x].charAt(y)) {
            digitCount++;
        }
      }
    }
    
    return digitCount;
}

console.log(nbDig(10, 1));
// should log 4
console.log(nbDig(5750, 0));
// should log 4700
console.log(nbDig(11011, 2));
// should log 9481
console.log(nbDig(12224, 8));
// should log 7733
console.log(nbDig(11549, 1));
// should log 11905
