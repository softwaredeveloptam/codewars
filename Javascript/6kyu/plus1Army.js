/** 
 * Plus One Army
 * 
 * Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
 * the array can't be empty
 * only non-negative, single digit integers are allowed
 * Return nil (or your language's equivalent) for invalid inputs.

 * Examples
 * For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].
 * [4, 3, 2, 5] would return [4, 3, 2, 6]
 * 
 * @summary Given an array of integers, return an array that has only 1 added to the value represented by an array.
 * @link https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript
 * @author Tam Nguyen <softwaredeveloptam@gmail.com>
*/ 

// --- Tests --- 

console.log(upArray([2, 3, 9])); // [2, 4, 0]
console.log(upArray([4, 3, 2, 6])); // [4, 3, 2, 7]
console.log(upArray([1, -9])); // returns null
console.log(upArray([2, 9, 9, 9, 9])); // [3, 0, 0, 0, 0]
console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7]));
// [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]

// --- Helper Functions ---

function upArray(arrayOfNumbers) {

    if(!checkForValidNum(arrayOfNumbers)) {
        return null;
    }

    let numFromArray = Number(arrayOfNumbers.join("")) + 1;
    let numbersInArray = strToNumInArray(numFromArray.toString().split(""));
    
    return numbersInArray;
}

function checkForValidNum(arrayOfNumbers) {
    
    for(let i = 0; i < arrayOfNumbers.length; i++) {
        if(arrayOfNumbers[i] < 0 || arrayOfNumbers[i] > 9) {
            return null;
        }
    }

    return arrayOfNumbers;
}

function strToNumInArray(stringArrayOfNumbers) {
    let newArray = [];
    for(let i = 0; i < stringArrayOfNumbers.length; i++) {
        newArray[i] = Number(stringArrayOfNumbers[i]);
    }
    return newArray;
}

