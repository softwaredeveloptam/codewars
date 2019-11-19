// https://www.codewars.com/kata/factorial/train/javascript

/* 

In mathematics, the factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n. 
For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. 
If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or 
IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or 
ValueError (Python) or return -1 (C).

*/

console.log(factorial(5));

// --- Helper Functions ---

function factorial(number) {
  if(number < 0 || number > 12) {
    throw new RangeError("Cannot be below 0 or above 12");
  }
  
  if(number == 0) {
    return 1;
  }
  
  return factorialAnswer = listAllNumbers(number).reduce(function (sumAccumulator, currentNumber) {
    return sumAccumulator * currentNumber;
  }, 1); 
}

function listAllNumbers(number) {
  
  let array = [];
  
  for(let i = 1; i <= number; i++) {
    array.push(i);
  }
  
  return array;
}