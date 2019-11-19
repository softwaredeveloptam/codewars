/**
 * Equal Sides of an Array
 * 
 * @summary Find index N where the sum of the integers to the left of N is equal to the sum of integers to the right of N
 * @link https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript
 * @author Tam Nguyen <softwaredeveloptam@gmail.com>
 */


// --- Tests ---

console.log(findEvenIndex([1,2,3,4,3,2,1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([1,2,3,4,5,6])); // -1
console.log(findEvenIndex([20,10,30,10,10,15,35])); // 3


// --- Helper Functions ---

function findEvenIndex(arr) {
    
    var firstArray = [];
    var secondArray = [];
    
    var testArrayLeft = arr;
    testArrayLeft.shift();
    testArrayLeft = findArraySum(testArrayLeft);

    if(testArrayLeft == 0) {
        return 0;
    }
    
    var testArrayRight = arr;
    testArrayRight.pop();
    testArrayRight = findArraySum(testArrayRight);

    if(testArrayRight == 0) {
        return arr.length - 1;
    }

    for(let i = 0; i < (arr.length/2); i++) {
        firstArray.push(arr[i]);
        secondArray.push(arr[arr.length-1-i]);

        let sumFirst = findArraySum(firstArray);
        let sumSecond = findArraySum(secondArray);

        if (sumFirst == sumSecond) {
            var index = i;
        }
    }

    if (index != undefined) {
        return index; 
    }

    else {
        return -1;
    }
}


function findArraySum(array) {
    let sum = 0;
    sum = array.reduce(function (accumulator, nextValue) {
        return accumulator + nextValue;
    }, 0)
    return sum;
}