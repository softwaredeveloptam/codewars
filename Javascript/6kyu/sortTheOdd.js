/** 
 * Sort The Odd
 * 
 * You have an array of numbers.
 * Your task is to sort ascending odd numbers but even numbers must be on their places.
 * Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
 * 
 * Example
 * sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
 * 
 * @summary Sort an array of numbers by sorting the ascending odd numbers but keep the even numbers in their place.
 * @link https://www.codewars.com/kata/sort-the-odd/train/javascript
 * @author Tam Nguyen <softwaredeveloptam@gmail.com>
 */

// --- Tests ---

console.log(sortArray([5, 3, 2, 8, 1, 4])) 
// [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0]))
// [1, 3, 5, 8, 0]
console.log(sortArray([11, 3, 2, 8, 1, 4, 5]));
// [1, 3, 2, 8, 5, 4, 11]

// --- Helper Functions ---

/**
 * @param {Array} array 
 * @returns {Array} 
 */

function sortArray(array) {
  
    var arrayLength = array.length;
    var unsortedOddArray = [];
    var unsortedEvenNumberArray = [];
    var unsortedEvenPositionArray = [];
    
    for(var i = 0; i < arrayLength; i++) {
      if(array[i] % 2 == 1)
        unsortedOddArray.push(array[i]);
      else {
        unsortedEvenNumberArray.push(array[i]);
        unsortedEvenPositionArray.push(i);
      }
    }
    
    var sortedOddArray = unsortedOddArray.sort((function customSort(a, b) { return a - b; } ));
    var sortedArray = [];
    var countEven = 0;
    var countOdd = 0;
    
    for(var x = 0; x < arrayLength; x++) {
      
      if(x == unsortedEvenPositionArray[countEven]) {
        sortedArray.push(unsortedEvenNumberArray[countEven]);
        countEven++;
      }
      else {
        sortedArray.push(sortedOddArray[countOdd]);
        countOdd++;
      }
    }
    
    return sortedArray;
}

