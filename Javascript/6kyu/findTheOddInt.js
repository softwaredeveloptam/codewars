/**
 * Find the Odd Integer
 * 
 * @summary Given an array, find the int that appears an odd number of times. 
 * @link https://www.codewars.com/kata/find-the-odd-int/train/javascript
 * @author Tam Nguyen <softwaredeveloptam@gmail.com>
*/

// --- Tests ---

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // -1
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])); // 5
console.log(findOdd([10])); // 10
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])); // 10
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])); // 1

// --- Helper Functions ---

/**
 * @param {Array} array 
 * @returns {Number} returns the number that is the odd one out 
 */

function findOdd(array) {
    
    var oddNumber = undefined;

    for(let i = 0; i < array.length; i++) {
        /** @function checkNum */
        if(checkNum(array[i], array) == true) {
            oddNumber = array[i];
        }
    }

    return oddNumber;
}

/**
 * @param {Number} number 
 * @param {Array} array 
 * @returns {Boolean} 
 */

function checkNum(number, array) {
    
    var count = 0;

    for(let i = 0; i < array.length; i++) {
        if(number == array[i]) 
            count++; 
    }

    if (count % 2 == 1) { 
        return true; 
    } else { 
        return false; 
    }
}
