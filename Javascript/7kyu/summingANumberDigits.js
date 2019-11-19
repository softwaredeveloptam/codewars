// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

/*

Write a function named sumDigits which takes a number as input and 
returns the sum of the absolute value of each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5

Let's assume that all numbers in the input will be integer values.

*/

function sumDigits(number) {
    let numString = number.toString();
    let numArray = numString.split("");

    var sum = 0;

    for(let i = 0; i < numArray.length; i++) {
        if(numArray[i] != '-' && !isNaN(numArray[i])) {
            numArray[i] = Number(numArray[i]);
            sum += numArray[i];
        }
    }

    return sum;
}

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));